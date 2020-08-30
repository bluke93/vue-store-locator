<template>
  <div v-if="isReady">
    <mgl-map
      :center="computedCenter"
      :zoom="zoom"
      :access-token="accessToken"
      :map-style="mapStyle"
      @load="handleLoad">
      <template v-for="(feature, index) in markersCoordinates.features">
        <mgl-marker :coordinates.sync="feature.geometry.coordinates" :key="index" >
          <div slot="marker">
            <img v-if="current != feature.id" class="ca-marker"   
              @click="markerClick(feature)"
              src="~assets/images/marker.svg"/>
            <img v-if="current == feature.id" class="ca-marker active"   
              @click="markerClick(feature)"
              src="~assets/images/marker-active.svg"/>
          </div>
        </mgl-marker>
      </template> 
      <mgl-geojson-layer
        v-if="airports.length > 0"
        ref="geolayer"
        :source-id="features.sourceId"
        :source="features.source"
        :layer-id="features.layer.id"
        :layer="features.layer"
        @added="handleAdded"
        @mouseenter="handleMouse(true)"
        @mouseleave="handleMouse(false)" />
    </mgl-map>
  </div>
</template>

<script>
import { MAPBOX_TOKEN, MAPBOX_STYLE } from "@/utils/constants"
import bbox from '@turf/bbox'
import turfCenter from '@turf/center'
import { point, featureCollection } from '@turf/helpers'
import Mapbox from "mapbox-gl";
import { MglMap, MglMarker } from "vue-mapbox";

import VueTypes from 'vue-types'



export default {
  components: {
    MglMap, 
    MglMarker
  },
  props: {
    center: VueTypes.array,
    zoom: VueTypes.number,
    airports: VueTypes.array.def(() => ([])),
    current: VueTypes.oneOfType([
      VueTypes.number,
      VueTypes.string
    ]),
  },
  data() {
    return {
      accessToken: MAPBOX_TOKEN,
      mapStyle: MAPBOX_STYLE,
      computedCenter: null,
      isReady: false,
    };
  },
  computed: {
    markersCoordinates () {
      return featureCollection(this.airports.map(o => {
        const id = parseInt(o.id)
        return {
          ...point([ parseFloat(o.longitude), parseFloat(o.latitude) ], { id, name: o.name }),
          id
        }
      }))
    },
    features () {
      return {
        sourceId: 'airports',
        source: {
          type: 'geojson',
          data: featureCollection(this.airports.map(o => {
            const id = parseInt(o.id)
            return {
              ...point([ parseFloat(o.longitude), parseFloat(o.latitude) ], { id, name: o.name }),
              id
            }
          }))
        },
        layer: {
          id: 'features-layer',
          source: 'airports',
          type: 'symbol',
          layout: {
            'text-line-height': 0.65,
            'text-padding': 0,
            'text-anchor': 'bottom',
            'text-allow-overlap': true,
          },
          paint: {
            'text-translate-anchor': 'viewport',
            'text-halo-color': 'rgba(0, 0, 0, 1)',
            'text-halo-width': 0.5,
            'text-color': [
              'case',
              [ 'boolean', [ 'feature-state', 'active' ], false ],
              '#cd176c',
              '#008b92'
            ],
            'text-color-transition': {
              duration: 300
            }
          }
        }
      }
    },
    bounds () {
      return bbox(this.features.source.data)
    }
  },
  async created () {
    if (this.center.length) {
      this.computedCenter = this.center
    } else {
      this.computedCenter = turfCenter(this.features.source.data).geometry.coordinates
    }
    this.map = null
    if (process.client) {
      const { default: mapbox } = await import('@/utils/mapbox')

      mapbox()
      this.$nextTick(() => {
        this.isReady = true
      })
      // setTimeout(_ => {
      // }, 50)
    }
  },
  methods: {
    handleAdded (event) {
      this.$watch(
        'current',
        nval => {
          if (nval) {
            this.map.querySourceFeatures(this.features.sourceId, { filter: [ '!=', 'id', nval ] }).forEach(f => {
              this.map.setFeatureState({ id: f.id, source: this.features.sourceId }, { active: false })
            })
            this.map.setFeatureState({ id: nval, source: this.features.sourceId }, { active: true })
          }
        },
        { immediate: true }
      )
    },
    handleLoad ({ map }) {
      this.map = map
      this.$watch('bounds', nval => {
        const options = {
          padding: {
            top: 40,
            bottom: 20,
            left: 20,
            right: 20
          }
        }
        if (!this.visible) {
          options.duration = 0
        }
        if (this.airports?.length) {
          this.map.fitBounds(this.bounds, options, { synthetic: true })
        }
      }, { immediate: true })
    },
    handleMouse (enter) {
      if (this.map) {
        this.map.getCanvas().style.cursor = enter ? 'pointer' : ''
      }
    },
    markerClick(event){
      this.$emit('marker-click', { coordinates: event.geometry.coordinates, info: event })
    }
  }
};
</script>

<style>
@import 'mapbox-gl/dist/mapbox-gl.css';
</style>