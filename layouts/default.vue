<template>
  <div>
    <Navbar />
    <div class="d-flex flex-row no-gutters page-wrapper">
      <div class="col-12">
        <Nuxt />
      </div>
      <Sidebar class="col-3"/>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar'
import Sidebar from '@/components/layout/Sidebar'

export default {
  components: {
    Navbar,
    Sidebar
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  .page-wrapper {
    height: 100vh;
    overflow: hidden;
  }
}
</style>