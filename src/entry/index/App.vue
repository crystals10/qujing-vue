<template>
  <div id="app">
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import Footer from 'components/Footer.vue'
export default {
  name: 'app',
  components: {
    FooterComponent: Footer
  }
}
</script>

<style>
#app {
  height:100%;
  position: relative;
}
</style>
