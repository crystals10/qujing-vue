<template>
  <div id="skill-manage">
    <div class="skill-card-wrap">
      <template>
        <skill-card v-for='(item, index) in m_skill_datas' :key='index' v-bind:data='item'></skill-card>
      </template>
    </div>
    <mu-float-button to="/addskill" class="add-skill-button" icon='add' />
  </div>
</template>
<script>
import SkillCard from "../SkillCard"
export default {
  name: "skill-manage",
  data: function data() {
    return {
      m_skill_datas: [
        {
          skill_title: '两小时教你搭建『取经』这个网站包括后台',
          skill_intro: '前端对于大部分人而言门槛较低，但知识点较杂，入门容易精通很难，平时可能大家联系的点还只是停留在css的属性联系，一些简单的效果Demo，以及javascript语法的学习，碰见具体的项目会感觉无从下手，再加上平时也缺少相关项目的指导与联系。『取经』这个网站的最初始的可用版本设计开发也只是用了一晚上的时间，我会在两小时之内还原这个网站的搭建过程。',
          skill_price: '120',
          skill_time: '2',
          skill_tag: '互联网',
          skill_id: ''
        },
        {
          skill_title: '两小时教你搭建『取经』这个网站包括后台',
          skill_intro: '前端对于大部分人而言门槛较低，但知识点较杂，入门容易精通很难，平时可能大家联系的点还只是停留在css的属性联系，一些简单的效果Demo，以及javascript语法的学习，碰见具体的项目会感觉无从下手，再加上平时也缺少相关项目的指导与联系。『取经』这个网站的最初始的可用版本设计开发也只是用了一晚上的时间，我会在两小时之内还原这个网站的搭建过程。',
          skill_price: '120',
          skill_time: '2',
          skill_tag: '互联网',
          skill_id: ''
        }
      ]
    }
  },
  components: {
    SkillCard
  }
}
</script>
<style lang="scss">
@import "../../../scss/_variables.scss";
#skill-manage{
  padding-bottom: 60px;
  .add-skill-button{
    position: fixed;
    bottom:60px;
    right:10px;
  }
}
</style>
