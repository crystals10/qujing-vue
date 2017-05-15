<template>
  <div id="add-skill">
    <mu-appbar title="发布新技能" class='appbar' titleClass="appbar-title" />
    <div class="add-skill-form">
      <div class="order-stepper-form">
        <mu-text-field label='技能标题' v-model='m_skill_title' labelClass="input-label" inputClass='input-content' fullWidth :maxLength="30" />
        <mu-text-field label='个人情况描述' v-model='m_skill_description' labelClass="input-label" inputClass='input-content' multiLine fullWidth :rows="2" :rowsMax="8" :maxLength="400" :minLength="100" />
        <mu-text-field label='技能总价格：' v-model='m_skill_price' labelClass="input-label" inputClass='input-content' type="number" fullWidth/>
        <mu-text-field label='技能时常：' v-model='m_skill_time' labelClass="input-label" inputClass='input-content' type="number" fullWidth/>
        <mu-text-field label='作品链接（非必须）：' v-model='m_skill_works' labelClass="input-label" inputClass='input-content' type="url" fullWidth/>
        <div class="skill-category">
          <p class='skill-category-title'>技能标签：</p>
          <mu-flexbox class="category-flexbox">
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='music_note' :class="{ active: m_skill_tag ==1 }" @click='f_choose_tag(1)' iconClass='category-icon' labelClass='category-label'  label='音乐'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='photo_camera' :class="{ active: m_skill_tag ==2 }" @click='f_choose_tag(2)' iconClass='category-icon' labelClass='category-label'  label='摄影'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='palette' :class="{ active: m_skill_tag ==3 }" @click='f_choose_tag(3)' iconClass='category-icon' labelClass='category-label'  label='设计'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='airplanemode_active' :class="{ active: m_skill_tag ==4 }" @click='f_choose_tag(4)' iconClass='category-icon' labelClass='category-label'  label='留学'></mu-flat-button>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox class="category-flexbox">
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='work' :class="{ active: m_skill_tag ==5 }" @click='f_choose_tag(5)' iconClass='category-icon' labelClass='category-label'  label='工作'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='laptop' :class="{ active: m_skill_tag ==6 }" @click='f_choose_tag(6)' iconClass='category-icon' labelClass='category-label' label='互联网'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='local_library' :class="{ active: m_skill_tag ==7 }" @click='f_choose_tag(7)' iconClass='category-icon' labelClass='category-label'  label='学习'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='directions_bike' :class="{ active: m_skill_tag ==8 }" @click='f_choose_tag(8)' iconClass='category-icon' labelClass='category-label'  label='运动'></mu-flat-button>
            </mu-flexbox-item>
          </mu-flexbox>
        </div>
        <div class="button-wrap">
          <mu-raised-button class="button" @click='f_add_skill' label='提交' primary />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "add-skill",
  data: function data() {
    return {
      m_skill_title: '',
      m_skill_description: '',
      m_skill_price: '',
      m_skill_time: '',
      m_skill_works: '',
      m_skill_tag: 1
    }
  },
  methods: {
    f_choose_tag(id){
      this.m_skill_tag = id
    },
    f_add_skill(){
      if (this.m_skill_title.trim() == '') {
        this.$warn('请输入技能标题')
        return
      }
      if (this.m_skill_description.trim() == '') {
        this.$warn('请输入技能描述')
        return
      }
      if (this.m_skill_price.trim() == '') {
        this.$warn('请输入技能价格')
        return
      }
      if (this.m_skill_time.trim() == '') {
        this.$warn('请输入技能时长')
        return
      }
      if (this.m_skill_tag == '') {
        this.$warn('请选择技能标签')
        return
      }
      this.add_skill({
        title: this.m_skill_title,
        description: this.m_skill_description,
        totalPrice: this.m_skill_price,
        totalTime: this.m_skill_time,
        works: this.m_skill_works,
        tagId: this.m_skill_tag
      }).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('发布成功', function () {
            this.$router.push('/skill')
          }.bind(this))
        } else if (data.status == 'unlogin') {
          this.$showRegisterPanel(0)
        } else {
          this.$warn(data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#add-skill{
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .add-skill-form{
    background-color: #fff;
    margin-top: 10px;
    padding: 10px 20px 20px;
    .input-content{
      font-size: 14px;
      color: $primary-color;
    }
  }
  .skill-category-title{
    font-size: 15px;
    color: rgba(0,0,0,0.54);
  }
  .category-flexbox{
    margin-top: 6px;
    &:first-child{
      margin-top: 0;
    }
    .category-icon{
      color: #757575;
      margin-left: 0;
      font-size: 18px;
    }
    .category-label{
      padding-right: 2px;
      font-size: 13px;
    }
    .active{
      .category-icon{
        color: $primary-color;
      }
      .category-label{
        color: $primary-color;
      }
    }
  }
  .button-wrap{
    text-align: center;
    margin-top: 10px;
    .button{
      width:200px;
      border-radius: 40px;
      line-height: 40px;
      height: 40px;
    }
  }
}
</style>
