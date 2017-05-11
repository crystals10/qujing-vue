<template>
  <div id="skill-manage">
    <div class="skill-card-wrap">
      <template v-if='m_skill_datas.length > 0'>
        <skill-card v-for='(item, index) in m_skill_datas' :key='index' v-bind:data='item'></skill-card>
      </template>
      <template v-else>
        <div class="no-skill">
          <mu-icon value='pets' :size='80' />
          <p class='tip'>暂时没有发布任何技能</p>
          <p class='tip'>可点击右下角『+』按钮发布新技能</p>
        </div>
      </template>
      <p class='tip'>可点击右下角『+』按钮发布新技能</p>
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
      m_skill_datas: []
    }
  },
  mounted() {
    this.f_get_user_skills()
  },
  methods: {
    f_get_user_skills() {
      this.fetch_skill_list(1).then(function (data) {
        this.m_skill_datas = data
      })
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
  .skill-card-wrap{
    padding: 20px 10px 0;
  }
  .tip{
    margin-top: 10px;
    text-align: center;
    color: rgba($primary-color, 0.6);
  }
  padding-bottom: 60px;
  .no-skill{
    padding-top: 40px;
    text-align: center;
    color: rgba($primary-color, 0.6);
  }
  .add-skill-button{
    position: fixed;
    bottom:60px;
    right:10px;
  }
}
</style>
