<template>
  <div id="manage-header">
    <div class="header-inner">
      <a href="javascript:void(0)；">
          <h1 class="logo-wrap">
              <img src="/static/img/logo.png" class="logo" /><span class="slogan">任何人的技能都不该被埋没</span>
          </h1>
      </a>
      <div class="account right">
          <img src="/static/img/logo.png" id="substation-logo" class="substation-logo none"/>
          <span class="name" id="substation-name">华中科技大学分站</span>
          |
          <a href="javascript:void(0);" class="logout" id="logout">退出</a>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "manage-header",
  data: function data() {
    return {

    }
  }
}
</script>
<style lang="scss">
@import "../../scss/_variables.scss";
#manage-header{
  background-color: #FFFFFF;
  min-width: 1200px;
  .header-inner{
    width: 1200px;
    height:70px;
    margin:0 auto;
    position: relative;
  }
  .logo-wrap{
    top:0;
    left:0;
    height: 70px;
    line-height: 70px;
    position: absolute;
    .logo{
      height:40px;
      vertical-align: middle;
    }
    .slogan{
      font-size: 16px;
      vertical-align: middle;
      color: #333;
      padding-left: 10px;
      font-weight: normal;
    }
  }
  .account{
    top:0;
    right:0;
    height: 70px;
    line-height: 70px;
    position: absolute;
    .substation-logo{
      height:30px;
      vertical-align: middle;
    }
    .logout{
      color: #666;
    }
  }
}
</style>
