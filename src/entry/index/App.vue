<template>
  <div id="app">
    <router-view></router-view>
    <footer-component class='footer'></footer-component>
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
  position: relative;
  padding-bottom: 56px;
  background-color: #fafafa;
  .footer{
    position: fixed;
    bottom: 0;
    left:0;
    width:100%;
  }
}
</style>
