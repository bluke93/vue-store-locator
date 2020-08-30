import Vue from 'vue'
import { MglMap, MglGeojsonLayer } from 'vue-mapbox'
import Mapbox from 'mapbox-gl'

export default () => {
  Vue.component('MglMap', MglMap)
  Vue.component('MglGeojsonLayer', MglGeojsonLayer)
  Vue.prototype.$mapbox = Mapbox
}
