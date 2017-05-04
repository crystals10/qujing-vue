<template>
    <mu-bottom-nav :value="bottomNav" shift @change="handleChange">
      <mu-bottom-nav-item value="1" title="发现" to="/" icon="home"/>
      <mu-bottom-nav-item value="2" title="消息管理" to="/message" icon="email"/>
      <mu-bottom-nav-item value="3" title="发布技能" to="/skill" icon="book"/>
      <mu-bottom-nav-item value="4" title="我的" to="/user" icon="perm_contact_calendar"/>
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
