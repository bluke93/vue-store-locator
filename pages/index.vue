<template>
  <div class="page-wrapper">
    <BaseMap 
      class="map-item" 
      :center="[ 12.438504, 42.742161 ]"
      :zoom="4"
      :airports="airports"
      />
  </div>
</template>

<script>
import BaseMap from '@/components/map/BaseMap'
export default {
  components: {
    BaseMap
  },
  data(){
    return {
      airports: [
        {
          "id": 1051,
          "name": "Fuerteventura Airport",
          "city": "Fuerteventura",
          "country": "Spain",
          "iata": "FUE",
          "icao": "GCFV",
          "latitude": 28.452699661254883,
          "longitude": -13.863800048828125,
          "altitude": 85,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1052,
          "name": "Hierro Airport",
          "city": "Hierro",
          "country": "Spain",
          "iata": "VDE",
          "icao": "GCHI",
          "latitude": 27.814800262451172,
          "longitude": -17.887100219726562,
          "altitude": 103,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1053,
          "name": "La Palma Airport",
          "city": "Santa Cruz De La Palma",
          "country": "Spain",
          "iata": "SPC",
          "icao": "GCLA",
          "latitude": 28.626499,
          "longitude": -17.7556,
          "altitude": 107,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1054,
          "name": "Gran Canaria Airport",
          "city": "Gran Canaria",
          "country": "Spain",
          "iata": "LPA",
          "icao": "GCLP",
          "latitude": 27.931900024414062,
          "longitude": -15.38659954071045,
          "altitude": 78,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1055,
          "name": "Lanzarote Airport",
          "city": "Arrecife",
          "country": "Spain",
          "iata": "ACE",
          "icao": "GCRR",
          "latitude": 28.945499,
          "longitude": -13.6052,
          "altitude": 46,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1056,
          "name": "Tenerife South Airport",
          "city": "Tenerife",
          "country": "Spain",
          "iata": "TFS",
          "icao": "GCTS",
          "latitude": 28.044500351,
          "longitude": -16.5725002289,
          "altitude": 209,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1057,
          "name": "Tenerife Norte Airport",
          "city": "Tenerife",
          "country": "Spain",
          "iata": "TFN",
          "icao": "GCXO",
          "latitude": 28.4827003479,
          "longitude": -16.3414993286,
          "altitude": 2076,
          "timezone": 0,
          "DST": "E",
          "tz": "Atlantic/Canary",
          "type": "airport",
          "source": "OurAirports"
        },
        {
          "id": 1058,
          "name": "Melilla Airport",
          "city": "Melilla",
          "country": "Spain",
          "iata": "MLN",
          "icao": "GEML",
          "latitude": 35.279800415,
          "longitude": -2.9562599659,
          "altitude": 156,
          "timezone": 1,
          "DST": "E",
          "tz": "Europe/Madrid",
          "type": "airport",
          "source": "OurAirports"
        }],
    }
  }
}
</script>

<style lang="scss">
  .map-item {
    width: 100%;
    height: 100%;
    z-index: 0;
  }
</style>
