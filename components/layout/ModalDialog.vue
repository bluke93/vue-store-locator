<template>
  <transition
    enter-class="modal-transition__enter"
    leave-to-class="modal-transition__leave-to"
    enter-active-class="modal-transition__moving"
    leave-active-class="modal-transition__moving"
    @after-leave="close">
    <div
      v-show="isVisible"
      class="modal" :class="{'show': isVisible == true}">
      <div
        class="modal__backdrop"
        @click="hide" />
      <aside
        class="modal__content"
        :class="id">
        <span
          class="modal__close"
          @click="hide" />
        <portal-target name="modal-content" />
      </aside>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
import VueTypes from 'vue-types'

  export default {
    name: 'ModalDialog',
    computed: {
      ...mapState('modal', [
        'id',
        'isVisible',
      ])
    },
    props: {
      layout: VueTypes.string
    },
    methods: {
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
.modal {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
    &.show {
      display: block !important;
    }
  }

  .modal__backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.85);
    opacity: 0.85;
    z-index: -1;
  }

  .modal__content {
    position: absolute;
    padding: rem(30px);
    border-radius: rem(20px);
    background-color: #ffffff;
    max-height: 80%;
    overflow: auto;
    max-width: 60%;
    min-width: 390px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .modal__close {
    &:not(.lead-modal__close) {
      display: none;
    }
    position: absolute;
    top: rem(10px);
    right: rem(10px);
    width: 25px;
    height: 25px;
    padding: 5px;
    cursor: pointer;

    &::before,
    &::after {
      content: '';
      position: absolute;
      right: 50%;
      top: 50%;
      width: 15px;
      height: 2px;
      border-radius: 2px;
      background-color: $gray-800;
    }

    &::before {
      transform: translate(50%, -50%) rotate(45deg);
    }

    &::after {
      transform: translate(50%, -50%) rotate(-45deg);
    }
  }

  .modal-transition__enter,
  .modal-transition__leave-to {
    opacity: 0;

    .modal__content {
      transform: scale(0.95)
    }
  }
</style>
