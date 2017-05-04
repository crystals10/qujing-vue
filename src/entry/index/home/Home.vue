<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search></search>
    <template v-for='item in m_skill_datas'>
      <skill-card></skill-card>
    </template>
  </div>
</template>
<script>
import Banner from './Banner'
import Category from './Category'
import Search from './Search'
import SkillCard from '../SkillCard'
export default {
  name: "home",
  data: function data() {
    return {
      m_skill_datas: [1,2,3,4,5]
    }
  },
  components: {
    Banner,
    Category,
    Search,
    SkillCard
  }
}
</script>
<style>
</style>
