<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search v-on:search='f_search_skills_by_keyword'></search>
    <div class="skill-card-wrap">
      <!-- loading 的过渡动画 -->
      <transition name='loading'>
        <div v-show='m_loading_show' class="loading-wrap">
          <img src="../../../assets/loading.svg" class="loading-svg" alt="">
        </div>
      </transition>

      <template  v-if='m_skill_datas.length > 0'>
        <template  v-for='item in m_skill_datas'>
          <skill-card v-bind:data='item'></skill-card>
        </template>
      </template>
      <template v-else-if='!m_loading_show && m_skill_datas.length==0'>
        <div class="no-skill">
          <mu-icon value='pets' :size='80' />
          <p class='tip'>技能列表为空</p>
        </div>
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
    f_hide_loading () {
      this.m_loading_show = false
      // setTimeout(function () {
      //   this.m_loading_show = false
      // }.bind(this), 0)
    },
    f_get_all_skills () {
      let category = this.$route.params.category
      this.m_loading_show = true
      if (!category) {
        this.fetch_all_skills(this.m_sub_id).then(function (data) {
          this.m_skill_datas = data.result
          this.f_hide_loading()
        })
      } else {
        this.f_get_skills_by_tag(this.m_category_collection[category])
      }
    },
    f_get_skills_by_tag (tagId) {
      this.m_loading_show = true
      this.search_skill_by_tag(this.m_sub_id, tagId).then(function (data) {
        this.m_skill_datas = data.result
        this.f_hide_loading()
      })
    },
    f_search_skills_by_keyword (value) {
      if (value.trim() == '')
        return
      this.m_loading_show = true
      this.search_skill_by_keyword(this.m_sub_id, value).then(function (data) {
        this.m_skill_datas = data.result
        this.f_hide_loading()
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
@import "../../../scss/_variables.scss";
.loading-enter-active, .loading-leave-active {
  transition: opacity .5s;
  opacity: 1;
}
.loading-enter, .loading-leave-active {
  opacity: 0.4;
}
#home{
  .skill-card-wrap{
    padding:10px;
    .no-skill{
      padding-top: 20px;
      text-align: center;
      color: rgba($primary-color, 0.6);
    }
    .loading-wrap{
      margin-top: 10px;
      text-align: center;
      // transition: height 2s ease;
      .loading-svg{
        width:60px;
      }
    }
  }
}
</style>
