<template>
  <portal to="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Creating airport</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <div v-if="promptConfirm == false" class="form-edit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" v-model="element.name" id="name" placeholder="Write a name...">
        </div>
        <div class="form-group">
          <label for="City">City</label>
          <input type="text" class="form-control" v-model="element.city" id="city" placeholder="Write a City...">
        </div>
        <div class="form-group">
          <label for="Country">Country</label>
          <input type="text" class="form-control" v-model="element.country" id="country" placeholder="Write a Country...">
        </div>
        <div class="form-group">
          <label for="iata">IATA</label>
          <input type="text" class="form-control" v-model="element.iata" id="iata" placeholder="Ex: ABC">
        </div>
        <div class="form-group">
          <label for="icao">ICAO</label>
          <input type="text" class="form-control" v-model="element.icao" id="icao" placeholder="Ex: ABCD">
        </div>
        <div class="form-group">
          <label for="latitude">Latitude</label>
          <input type="text" class="form-control" v-model="element.latitude" id="latitude" placeholder="">
        </div>
        <div class="form-group">
          <label for="longitude">Longitude</label>
          <input type="text" class="form-control" v-model="element.longitude" id="longitude" placeholder="">
        </div>
      </div>
      <div v-else class="confirm">
        <p>Do you want to proceed?</p>
      </div>
    </div>
    <div class="modal-footer">
      <button v-if="promptConfirm == false" type="button" @click="handleUpdate" class="btn btn-primary">Add</button>
      <button v-else type="button" class="btn btn-primary" @click="confirm">Save</button>
      <button type="button" class="btn btn-secondary" @click="hide" data-dismiss="modal">Cancel</button>
    </div>
  </portal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      element: {
        name: null,
        city: null,
        country: null,
        iata: null,
        icao: null,
        latitude: null,
        longitude: null,
      },
      promptConfirm: false,
    }
  },
  methods: {
    handleUpdate(event){
      this.promptConfirm = true
    },
    confirm(event){
       this.$store.commit('airports/CREATE_ELEMENT', this.element)
       this.$store.commit('modal/SET_MODAL_CLOSED')
    },
    hide () {
      this.$store.commit('modal/SET_MODAL_CLOSED')
    },
    close () {
      this.$store.commit('modal/SET_MODAL_ID', null)
    },
  }
}
</script>

<style lang="scss">

</style>
