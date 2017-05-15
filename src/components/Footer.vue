<template>
    <mu-bottom-nav id="footer">
      <mu-bottom-nav-item value="1" title="发现行家" titleClass='footer-title' to="/home" icon="home"/>
      <mu-bottom-nav-item value="2" title="约见管理" titleClass='footer-title' to="/message" icon="email"/>
      <mu-bottom-nav-item value="3" title="技能管理" titleClass='footer-title' to="/skill" icon="book"/>
      <mu-bottom-nav-item value="4" title="个人中心" to="/user"titleClass='footer-title' icon="perm_contact_calendar"/>
    </mu-bottom-nav>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="scss">
@import '../scss/_variables.scss';
#footer{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  height:50px;
  box-shadow: 0px -3px 3px #ddd;
  .router-link-active{
    .mu-icon{
      color: $primary-color;
    }
    .footer-title{
      color: $primary-color;
    }
  }
  .mu-icon{
    font-size: 20px;
    color: #999;
  }
  .footer-title{
    font-size: 12px;
  }
}
</style>
