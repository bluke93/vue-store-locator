<template>
  <portal to="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Updating airport</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div v-if="element != null" class="modal-body">
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
          <input type="text" class="form-control" v-model="element.latitude" id="latitude" placeholder="Ex: ABCD">
        </div>
        <div class="form-group">
          <label for="longitude">Longitude</label>
          <input type="text" class="form-control" v-model="element.longitude" id="longitude" placeholder="Ex: ABCD">
        </div>
      </div>
      <div v-else class="confirm">
        <p>Do you want to proceed apply updates?</p>
      </div>
    </div>
    <div class="modal-footer">
      <button v-if="promptConfirm == false" type="button" @click="handleUpdate" class="btn btn-primary">Update</button>
      <button v-else type="button" class="btn btn-primary" @click="confirm">Confirm</button>
      <button type="button" class="btn btn-secondary" @click="hide" data-dismiss="modal">Cancel</button>
    </div>
  </portal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      element: null,
      promptConfirm: false,
    }
  },
  mounted(){
    this.element = Object.assign({}, this.$store.state.modal.data)
  },
  methods: {
    handleUpdate(event){
      this.promptConfirm = true
    },
    confirm(event){
       this.$store.commit('airports/UPDATE_ELEMENT', this.element)
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
