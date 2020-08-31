<template>
  <portal to="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Deleting airport</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close" @click="hide">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>This action is not reversible. Are you sure?</p>
    </div>
    <div class="modal-footer">
      <button type="button" @click="handleDelete" class="btn btn-danger">Delete</button>
      <button type="button" class="btn btn-secondary" @click="hide" data-dismiss="modal">Abort</button>
    </div>
  </portal>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {
      element: null,
    }
  },
  mounted(){
    this.element = Object.assign({}, this.$store.state.modal.data)
  },
  methods: {
    handleDelete(event){
       this.$store.commit('airports/DELETE_ELEMENT', this.element.id)
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

