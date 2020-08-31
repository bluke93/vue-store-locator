<template>
  <div class="d-flex flex-row no-gutters page-content">
    <div class="col-xl-9 col-lg-9 col-md-8 col-sm-0 map-container">
      <div class="form-group" id="filter-airport-container">
        <input type="text" v-model="filter" class="form-control" id="filter-airport" placeholder="Filter by name, iata code, icao code...">
      </div>
      <BaseMap 
        v-if="list.length > 0"
        class="map-item" 
        :center="[ 12.438504, 42.742161 ]"
        :zoom="5"
        :airports="filteredAirports"
        :current="currentSelected"
         @marker-click="handleActive"
        />
    </div>
    <Sidebar class="col-xl-3 col-lg-3 col-md-4 col-sm-12">
      <AirportList 
        :airports="filteredAirports"
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
      filter: ''
    }
  },
  computed: {
    ...mapState('airports', [
      'list'
    ]),
    criteria(){
      return this.filter != null || this.filter != '' ? this.filter.toLowerCase() : ''
    },
    filteredAirports() {
      return this.list.filter(item => item.name.toLowerCase().includes(this.criteria) || item.iata.includes(this.criteria.toUpperCase()) || item.icao.includes(this.criteria.toUpperCase()))
    }
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
      #filter-airport-container {
        position: absolute;
        bottom: 0;
        left: 50%;
        z-index: 1;
        width: 40%;
        transform: translate(-50%, -50%);
        #filter-airport {
          width: 100%;
          height: 50px;
          padding: 0.375rem 0.75rem;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #495057;
          background-color: #fff;
          background-clip: padding-box;
          border: 0;
          border-radius: 0;
          outline: none !important;
          transition: none;
        }
      }
    }
  }
  .map-item {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
 
  
</style>
