<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search></search>
    <div class="skill-card-wrap">
      <template v-for='item in m_skill_datas'>
        <skill-card></skill-card>
      </template>
    </div>
  </div>
</template>
<script>
import Banner from './Banner'
import Category from './Category'
import Search from './Search'
import SkillCard from './HomeSkillCard'
export default {
  name: "home",
  data: function data() {
    return {
      m_skill_datas: [1,2,3,4,5]
    }
  },
  mounted() {
    // this.$showRegisterPanel(0)
    // this.add_user()
  },
  components: {
    Banner,
    Category,
    Search,
    SkillCard
  }
}
</script>
<style lang="scss">
.skill-card-wrap{
  padding:10px;
}
</style>
