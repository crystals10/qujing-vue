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

<style lang="scss" scoped>
#app {
  height:100%;
  overflow: hidden;
  position: relative;
  padding-bottom: 50px;
}
</style>
