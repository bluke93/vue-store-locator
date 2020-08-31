<template>
  <div :id="`item-${airport.id}`" class="airport-item d-flex justify-content-between" @click="handleActive(airport)">
    <div>
      <div class="name">{{airport.name}}</div>
      <div class="description">{{airport.city}}, {{airport.country}}</div>
    </div>
    <div class="actions d-flex align-items-end">
      <Btn primary sized @click="handleEdit(airport)">
        <i class="fa fa-pencil" ></i>
      </Btn>
      <Btn danger sized @click="handleDelete(airport)">
        <i class="fa fa-trash-o"></i>
      </Btn>
    </div>
  </div>
</template>

<script>
import VueTypes from 'vue-types'
import Btn from '@/components/elements/Btn'
export default {
  components: {
    Btn
  },
  props: {
    airport: VueTypes.object.def({})
  },
  methods: {
    handleActive(event){
      this.$emit('airportClicked', { coordinates: [event.latitude, event.longitude], info: event })
    },
    handleEdit(event){
      this.$store.commit('modal/SET_MODAL_ID', 'edit-modal');
      this.$store.commit('modal/SET_MODAL_DATA', event);
    },
    handleDelete(event){
      this.$store.commit('modal/SET_MODAL_ID', 'delete-modal');
      this.$store.commit('modal/SET_MODAL_DATA', event);
    }
  }
}
</script>

<style lang="scss">
  .airport-item {
    width: 100%;
    padding: 15px;
    background: $gray-100;
    color: $gray-900;
    border-bottom: 1px solid $gray-400;
    transition: all 500ms;
    &:first-of-type {
      border-top: 1px solid $gray-400;
    }
    .name {
      font-weight: 800;
      font-size: $font-size-base;
    }
    .description {
      color: $gray-600;
      font-size: $font-size-sm;
    }
    .actions {
      opacity: 0;
      transition: 200ms;
    }
    &:hover  {
      background-color: $white;
      cursor: pointer;
      .actions {
        opacity: 1;
      }
    }
    &.active {
      background: $primary;
      color: $white;
      .description {
        color: $white;
      }
      .btn-primary {
        background: $white;
        color: $primary;
      }
    }
  }
</style>