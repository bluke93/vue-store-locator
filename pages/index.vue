<template>
  <div class="d-flex flex-row no-gutters page-content">
    <div class="col-xl-9 col-lg-9 col-md-8 col-sm-0 map-container">
      <BaseMap 
        v-if="list.length > 0"
        class="map-item" 
        :center="[ 12.438504, 42.742161 ]"
        :zoom="5"
        :airports="list"
        :current="currentSelected"
         @marker-click="handleActive"
        />
    </div>
    <Sidebar class="col-xl-3 col-lg-3 col-md-4 col-sm-12">
      <AirportList 
        :airports="list"
        @airportSelected="handleAirportClick"
        :currentActive="currentSelected" />
    </Sidebar>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import BaseMap from '@/components/map/BaseMap'
import Sidebar from '@/components/layout/Sidebar'
import AirportList from '@/components/airports/AirportList'
import Btn from '@/components/elements/Btn'


export default {
  components: {
    BaseMap,
    Sidebar
  },
  data(){
    return {
      currentSelected: null,
    }
  },
  computed: {
    ...mapState('airports', [
      'list'
    ]),
  },
  methods: {
    handleAirportClick (data) {
      this.currentSelected = data.info.id
    },
    handleActive (feature) {
      this.currentSelected = feature.info.id
      const container = '.airport-list'
      const speed = 300
      const offset = -75

      this.$scrollTo(`#item-${feature.info.id}`, speed, {
        container,
        offset
      })
    }
  }
}
</script>

<style lang="scss">
  .page-content {
    height: 100%;
    width: 100%;
    .map-container {
      position: relative;
      .add-new-airport {
        position: absolute;
        bottom: 30px;
        right: 30px;
        z-index: 1;
      }
    }
  }
  .map-item {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  
</style>
