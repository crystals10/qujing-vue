<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search></search>
    <skill-card></skill-card>
    <skill-card></skill-card>
    <skill-card></skill-card>
    <skill-card></skill-card>
    <skill-card></skill-card>
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
