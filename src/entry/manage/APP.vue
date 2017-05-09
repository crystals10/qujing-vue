<template>
  <div id="app">
    <header-component></header-component>
    <div class="main">
      <div class="left-side">
        <nav-component></nav-component>
      </div>
      <div class="right-side">
        <router-view></router-view>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
import ManageFooter from 'components/ManageFooter'
import ManageHeader from './Header'
import ManageNav from './Nav'
export default {
  name: 'app',
  components: {
    FooterComponent: ManageFooter,
    HeaderComponent: ManageHeader,
    NavComponent: ManageNav
  }
}
</script>

<style lang="scss" scoped>
#app {
  .main{
    margin-top: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border: 1px solid #eee;
    width: 1200px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 210px;
    position: relative;
    .left-side{
      height:100%;
      position: absolute;
      left:0;
      width:210px;
      border-right: 1px solid #eee;
    }
    .right-side{
      box-sizing: border-box;
      min-height: 660px;
    }
  }
}
</style>
