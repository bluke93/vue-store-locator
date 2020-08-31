<template>
  <button
    :disabled="disabled"
    :type="type || null"
    :class="[ 'btn', className ]"
    @click="$emit('click', $event)">
    <span
      v-if="$slots.default"
      class="btn__text">
      <slot />
    </span>
  </button>
</template>

<script>
  import VueTypes from 'vue-types'

  export default {
    name: 'Btn',
    props: {
      type: VueTypes.string,
      disabled: VueTypes.bool.def(false),
      primary: VueTypes.bool.def(false),
      secondary: VueTypes.bool.def(false),
      danger: VueTypes.bool.def(false),
    },
    computed: {
      className () {
        return [
          this.primary ? 'btn-primary' : null,
          this.secondary ? 'btn-secondary' : null,
          this.danger ? 'btn-danger' : null,
          this.sized ? 'btn-sm' : null,
        ]
      },
    }
  }
</script>

<style lang="scss">
  .btn {
    margin: 3px;
  }
</style>
