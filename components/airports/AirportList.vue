<template>
  <div class="airport-list">
    {{currentActive}}
    <template v-for="(airport, index) in orderedAirports">
      <Airport @airportClicked="selectedListItem" :airport="airport" :key="index" :class="{'active': currentActive == airport.id}" />
    </template>
  </div>
</template>

<script>
import Airport from '@/components/airports/Airport'
import VueTypes from 'vue-types'
export default {
  components: {
    Airport
  },
  props: {
    airports: VueTypes.array.def([]),
    currentActive: VueTypes.number.def(0)
  },
  computed: {
    orderedAirports(){
      let list = [...this.airports]
      return list.sort((a, b) => (a.id > b.id) ? 1 : -1)
    }
  },
  methods: {
    selectedListItem(event){
      this.$emit('airportSelected', event)
    }
  }
}
</script>

<style lang="scss">
.airport-list {
  max-height: 92vh;
  overflow-y: scroll;
}
</style>