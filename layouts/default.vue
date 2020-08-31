<template>
  <div>
    <Navbar />
    <div class="wrapper">
      <Nuxt />
    </div>
    <ModalDialog />
    <AddModal v-if="addModalOpen"/>
    <EditModal v-if="editModalOpen"/>
    <DeleteModal v-if="deleteModalOpen"/>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Navbar from '@/components/layout/Navbar'
import ModalDialog from '@/components/layout/ModalDialog'
import EditModal from '@/components/airports/EditModal'
import DeleteModal from '@/components/airports/DeleteModal'
import AddModal from '@/components/airports/AddModal'

export default {
  components: {
    Navbar,
    ModalDialog,
    EditModal,
    DeleteModal,
    AddModal,
  },
  computed :{
    ...mapState(['modal, id']),
    editModalOpen () {
      return this.$store.state.modal.id == 'edit-modal'
    },
    deleteModalOpen () {
      return this.$store.state.modal.id == 'delete-modal'
    },
    addModalOpen () {
      return this.$store.state.modal.id == 'add-modal'
    },
  },
  methods: {
    hide () {
      this.$store.commit('modal/SET_MODAL_CLOSED')
    }
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  .wrapper {
    height: 100vh;
    overflow: hidden;
  }
}
</style>