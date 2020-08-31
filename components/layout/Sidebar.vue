<template>
  <aside class="sidebar">
    <div class="content">
      <slot></slot>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
}
</script>

<style lang="scss">
  .sidebar {
    position: fixed !important;
    right: 0;
    top: 75px;
    height: 100vh;
    z-index: 1;
    background: $gray-300;
    border-left: 1px solid $gray-400;
    box-shadow: $box-shadow-lg;
  }
</style>
