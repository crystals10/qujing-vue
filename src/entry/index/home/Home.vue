<template>
  <div id="home">
    <banner></banner>
    <category></category>
    <search v-on:search='f_search_skills_by_keyword'></search>
    <div class="search-label">
      <span class="label" @click='f_choose_label("new")' v-bind:class="{'active': m_search_label == 'new'}">最新</span>
      <span class="label" @click='f_choose_label("hot")' v-bind:class="{'active': m_search_label == 'hot'}">最热</span>
    </div>
    <div class="skill-card-wrap">
      <template  v-if='m_skill_datas.length > 0'>
        <template  v-for='item in m_skill_datas'>
          <skill-card v-bind:data='item'></skill-card>
        </template>
      </template>
    </div>
    <mu-infinite-scroll :loading="loading" :loadingText='""' @load="loadMore"/>
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
      m_scroller_el: null,
      loading: false,
      m_cur_page: 0,
      m_page_num: 2,
      m_scroller: true,
      m_search_label: 'hot',
      m_token: '',
      m_sub_id: '',
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
    '$route': ['f_init']
  },
  beforeRouteEnter (to, from, next) {
    if (to.query.token) {
      // 加 token 默认认为访问者在有倾向性的访问
      next ()
    } else {
      if (!localStorage.getItem('sub_id')) {
        window.location.href = '/sub.html'
      } else {
        next()
      }
    }
  },
  beforeRouteUpdate (to, from, next) {
    if (to.query.token) {
      // 加 token 默认认为访问者在有倾向性的访问
      next ()
    } else {
      if (!localStorage.getItem('sub_id')) {
        window.location.href = './sub.html'
      } else {
        next()
      }
    }
  },
  mounted() {
    if (this.$route.query.token) {
      this.get_sub_id_by_token(this.$route.query.token).then(function (data) {
        this.m_sub_id = this.m_current_sub_id
        this.f_init()
      })
    } else if (localStorage.getItem('sub_id')) {
      this.m_sub_id = localStorage.getItem('sub_id')
      this.f_init()
    } else {
      window.location.href = './sub.html'
    }
  },
  methods:{
    f_hide_loading () {
      setTimeout(function () {
        this.m_loading_show = false
      }.bind(this), 100)
    },
    f_init () {
      let category = this.$route.params.category
      if (!category) {
        this.f_get_all_skills()
      } else {
        this.f_get_skills_by_tag(this.m_category_collection[category])
      }
    },
    f_get_all_skills () {
      this.m_loading_show = true
      this.m_cur_page = 0
      this.m_scroller = true
      if (this.m_search_label == 'new') {
        this.fetch_all_skills(this.m_sub_id, this.m_cur_page).then(function (data) {
          this.m_skill_datas = data.result
          this.f_hide_loading()
        })
      } else if (this.m_search_label == 'hot') {
        this.fetch_all_hotest_skills(this.m_sub_id, this.m_cur_page ).then(function (data) {
          this.m_skill_datas = data.result
          this.f_hide_loading()
        })
      }
    },
    f_get_skills_by_tag (tagId) {
      this.m_loading_show = true
      this.m_cur_page = 0
      this.m_scroller = true
      if (this.m_search_label == 'new') {
        this.search_skill_by_tag(this.m_sub_id, tagId, this.m_cur_page).then(function (data) {
          this.m_skill_datas = data.result
          this.f_hide_loading()
        })
      } else if (this.m_search_label == 'hot') {
        this.search_hotest_skill_by_tag(this.m_sub_id, tagId, this.m_cur_page).then(function (data) {
          this.m_skill_datas = data.result
          this.f_hide_loading()
        })
      }
    },
    f_search_skills_by_keyword (value) {
      if (value.trim() == '')
        return
      this.m_loading_show = true
      this.m_cur_page = 0
      this.m_scroller = false
      this.search_skill_by_keyword(this.m_sub_id, value, this.m_cur_page).then(function (data) {
        this.m_skill_datas = data.result
        this.f_hide_loading()
      })
    },
    f_choose_label (value) {
      let category = this.$route.params.category
      this.m_search_label = value
      if (!category) {
        this.f_get_all_skills()
      } else {
        this.f_get_skills_by_tag(this.m_category_collection[category])
      }
    },
    loadMore () {
      if (!this.m_scroller || this.loading) {
        return
      }
      this.loading = true
      let category = this.$route.params.category
      if (!category) {
        if (this.m_search_label == 'new') {
          this.fetch_all_skills(this.m_sub_id, ++this.m_cur_page).then(function (data) {
            if (data.result.length < this.m_page_num) {
              this.m_scroller = false
            }
            this.m_skill_datas = this.m_skill_datas.concat(data.result)
            this.loading = false
          })
        } else if (this.m_search_label == 'hot') {
          this.fetch_all_hotest_skills(this.m_sub_id, ++this.m_cur_page ).then(function (data) {
            if (data.result.length < this.m_page_num) {
              this.m_scroller = false
            }
            this.m_skill_datas = this.m_skill_datas.concat(data.result)
            this.loading = false
          })
        }
      } else {
        if (this.m_search_label == 'new') {
          this.search_skill_by_tag(this.m_sub_id, this.m_category_collection[category], ++this.m_cur_page).then(function (data) {
            if (data.result.length < this.m_page_num) {
              this.m_scroller = false
            }
            this.m_skill_datas = this.m_skill_datas.concat(data.result)
            this.loading = false
          })
        } else if (this.m_search_label == 'hot') {
          this.search_hotest_skill_by_tag(this.m_sub_id, this.m_category_collection[category], ++this.m_cur_page ).then(function (data) {
            if (data.result.length < this.m_page_num) {
              this.m_scroller = false
            }
            this.m_skill_datas = this.m_skill_datas.concat(data.result)
            this.loading = false
          })
        }
      }
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
#home{
  .search-label{
    margin-top: 10px;
    text-align: center;
    font-size: 0;
    .label{
      height: 30px;
      line-height: 30px;
      border: 1px solid #ddd;
      display: inline-block;
      border-right: 0;
      width:80px;
      color: #666;
      font-size: 12px;
      &.active{
        background-color: $primary-color;
        border-color: $primary-color;
        color: #fff;
      }
      &:first-child{
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
      }
      &:last-child{
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        border-right: 1px solid #ddd;
        position: relative;
        left:-1px;
      }
    }
  }
  .skill-card-wrap{
    margin-top: 10px;
    padding:0 10px;
    .no-skill{
      padding-top: 20px;
      text-align: center;
      color: rgba($primary-color, 0.6);
    }
    .loading-wrap{
      margin-top: 10px;
      text-align: center;
      .loading-svg{
        width:60px;
      }
    }
  }
}
</style>
