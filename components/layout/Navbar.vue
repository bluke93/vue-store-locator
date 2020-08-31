<template>
  <nav class="navbar navbar-expand-lg">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">AIRLIST</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarsExample07">
        <ul class="navbar-nav mr-auto">
          <!-- <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> -->
        </ul>
        <Btn primary sized @click="handleAdd">
          <i class="fa fa-plus" ></i> Add airport
        </Btn>
      </div>
    </div>
  </nav>
</template>

<script>
import Btn from '@/components/elements/Btn'
export default {
  name: 'Navbar',
  components: {
    Btn
  },
  methods: {
    handleAdd(event){
      this.$store.commit('modal/SET_MODAL_ID', 'add-modal');
    },
  }
}
</script>

<style lang="scss">
  .navbar {
    background: $white;
    border-bottom: 1px solid $border-color;
    box-shadow: $box-shadow-sm;
    position: fixed !important;
    width: 100%;
    top: 0;
    z-index: 2;
    .navbar-brand {
      font-size: $h2-font-size;
      color: $primary;
      font-family: 'Lexend Peta', sans-serif;
      background: -webkit-linear-gradient($metallic-seaweed,$primary);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: 1s;
    }
  }
</style>
