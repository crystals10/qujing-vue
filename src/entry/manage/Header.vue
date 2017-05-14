<template>
  <div id="manage-header">
    <div class="header-inner">
      <router-link to="home">
        <h1 class="logo-wrap">
            <img src="/static/img/logo.png" class="logo" /><span class="slogan">取经 - 让所有人的技能不再被埋没</span>
        </h1>
      </router-link>
      <div class="account right">
          <!-- <img src="/static/img/logo.png" id="substation-logo" class="substation-logo none"/> -->
          <span class="name" id="substation-name">华中科技大学分站</span>
          |
          <a href="javascript:void(0);" v-on:click='f_logout' class="logout" id="logout">退出</a>
      </div>
  </div>
  </div>
</template>
<script>
export default {
  name: "manage-header",
  data: function data() {
    return {
      m_mp_info: {}
    }
  },
  mounted(){
    this.get_admin_info().then(function (data) {
      if (data.status == 'ok') {
        this.m_mp_info = data.result
      } else {
        this.$warn(data.message, function () {
          window.location.href = '/open.html'
        })
      }
    })
  },
  methods: {
    f_logout(){
      this.logout_station().then(function (data) {
        if (data.status == 'ok') {
          this.$warn('退出成功', function () {
            window.location.href = '/open.html'
          }.bind(this))
        }
      })
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
