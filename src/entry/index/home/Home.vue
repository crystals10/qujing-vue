<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search v-on:search='f_search_skills_by_keyword'></search>
    <div class="skill-card-wrap">
      <div v-show='m_loading_show' class="loading-wrap">
        <img src="../../../assets/loading.svg" class="loading-svg" alt="">
      </div>
      <template v-for='item in m_skill_datas'>
        <skill-card v-bind:data='item'></skill-card>
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
      m_sub_id: 1,
      m_tag_id: 1,
      m_loading_show: true,
      m_category_collection: {
        music: 1,
        photo: 2,
        design: 3,
        aboard: 4,
        work:5,
        net:6,
        study:7,
        fit: 8
      },
      m_skill_datas: []
    }
  },
  watch: {
    '$route': ['f_get_all_skills']
  },
  mounted() {
    this.f_get_all_skills()
  },
  methods:{
    f_get_all_skills () {
      let category = this.$route.params.category
      this.m_loading_show = true
      if (!category) {
        this.fetch_all_skills(this.m_sub_id).then(function (data) {
          this.m_skill_datas = data
          this.m_loading_show = false
        })
      } else {
        this.f_get_skills_by_tag(this.m_category_collection[category])
      }
    },
    f_get_skills_by_tag (tagId) {
      this.m_loading_show = true
      this.search_skill_by_tag(this.m_sub_id, tagId).then(function (data) {
        this.m_skill_datas = data
        this.m_loading_show = false
      })
    },
    f_search_skills_by_keyword (value) {
      if (value.trim() == '')
        return
      this.m_loading_show = true
      this.search_skill_by_keyword(this.m_sub_id, value).then(function (data) {
        this.m_skill_datas = data
        this.m_loading_show = false
      })
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
<style lang="scss">
.skill-card-wrap{
  padding:10px;
  .loading-wrap{
    margin-top: 10px;
    text-align: center;
    transition: height 2s ease;
    .loading-svg{
      width:60px;
    }
  }
}
</style>
