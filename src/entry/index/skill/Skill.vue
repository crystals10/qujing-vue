<template>
  <div id="skill-manage">
    <div class="skill-card-wrap">
      <!-- 登录的状态 -->
      <template v-if='get_is_login() == 1'>
        <!-- 是行家 -->
        <template v-if='get_self_user_type() =="m"'>
          <template v-if='m_skill_datas.length > 0'>
            <skill-card v-for='(item, index) in m_skill_datas' :key='index' v-bind:data='item'></skill-card>
          </template>
          <template v-else>
            <div class="no-skill">
              <mu-icon value='pets' :size='80' />
              <p>暂时没有发布任何技能</p>
            </div>
          </template>
          <p class='tip'>可点击右下角『+』按钮发布新技能</p>
        </template>

        <!-- 不是行家 -->
        <template v-else>
          <div class="no-skill">
            <mu-icon value='stars' :size='80' />
            <p class='tip'>需要认证成为行家才可以发布技能</p>
            <mu-flat-button label='现在去认证' class='button' href="/auth.html" primary />
          </div>
        </template>
      </template>
      <!-- 未登录的状态 -->
      <template v-else>
        <div class="no-skill">
          <mu-icon value='account_circle' :size='80' />
          <p class='tip'>登录之后才可以查看自己的技能列表</p>
          <mu-flat-button label='现在登录' class='button' @click='f_login_right_now' primary />
        </div>
      </template>

    </div>
    <mu-float-button v-show="get_is_login()==1 && get_self_user_type() =='m'" to="/addskill" class="add-skill-button" icon='add' />
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
    this.f_init()
  },
  methods: {
    f_init () {
      this.is_login().then(function (data) {
      if (data.status == 'ok'){
          this.f_get_self_skills()
        }
      })
    },
    f_get_self_skills() {
      this.fetch_self_skill_list().then(function (data) {
        this.m_skill_datas = data.result
      })
    },
    f_login_right_now(){
      this.$showRegisterPanel(0, function () {
        this.f_init()
      }.bind(this))
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
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  .skill-card-wrap{
    padding:10px;
  }
  .tip{
    margin-top: 10px;
    text-align: center;
    color: rgba($primary-color, 0.6);
  }
  .no-skill{
    padding-top: 40px;
    text-align: center;
    color: rgba($primary-color, 0.6);
    .button{
      margin-top: 10px;
      .mu-flat-button-label{
        font-size: 16px;
        text-decoration: underline;
      }
    }
  }
  .add-skill-button{
    position: fixed;
    bottom:60px;
    right:10px;
  }
}
</style>
