<template>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange" id="footer">
      <mu-bottom-nav-item value="1" title="发现行家" titleClass='footer-title' to="/" icon="home"/>
      <mu-bottom-nav-item value="2" title="约见管理" titleClass='footer-title' to="/message" icon="email"/>
      <mu-bottom-nav-item value="3" title="技能管理" titleClass='footer-title' to="/skill" icon="book"/>
      <mu-bottom-nav-item value="4" title="个人中心" to="/user"titleClass='footer-title' icon="perm_contact_calendar"/>
    </mu-bottom-nav>
</template>

<script>
export default {
  data () {
    return {
      bottomNav: '1',
      bottomNavColor: '1'
    }
  },
  methods: {
    handleChange (val) {
      this.bottomNav = val
    }
  }
}
</script>
<style lang="scss">
#footer{
  position: fixed;
  bottom: 0;
  left:0;
  width:100%;
  height:50px;
  .mu-icon{
    font-size: 22px;
  }
  .footer-title{
    font-size: 12px;
  }
}
</style>
