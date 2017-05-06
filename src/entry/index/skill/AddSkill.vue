<template>
  <div id="add-skill">
    <mu-appbar title="发布新技能" class='appbar' titleClass="appbar-title" />
    <div class="add-skill-form">
      <div class="order-stepper-form">
        <mu-text-field label='技能标题' labelClass="input-label" inputClass='input-content' fullWidth :maxLength="30" />
        <!-- <mu-select-field label='选择您请教行家的具体技能' fullWidth v-model='m_select_value' labelClass="input-label" inputClass='input-content'>
          <mu-menu-item v-for="text,index in m_skills" :key="index" :value="index" :title="text" />
        </mu-select-field> -->
        <mu-text-field label='个人情况描述' labelClass="input-label" inputClass='input-content' multiLine fullWidth :rows="2" :rowsMax="8" :maxLength="400" :minLength="100" />
        <mu-text-field label='技能总价格：' labelClass="input-label" inputClass='input-content' type="number" fullWidth/>
        <mu-text-field label='技能时常：' labelClass="input-label" inputClass='input-content' type="number" fullWidth/>
        <mu-text-field label='作品链接（非必须）：' labelClass="input-label" inputClass='input-content' type="number" fullWidth/>
        <div class="skill-category">
          <p class='skill-category-title'>技能标签：</p>
          <mu-flexbox class="category-flexbox">
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='music_note' iconClass='category-icon' labelClass='category-label'  label='音乐'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='photo_camera' iconClass='category-icon' labelClass='category-label'  label='摄影'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='palette' iconClass='category-icon' labelClass='category-label'  label='设计'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='airplanemode_active' iconClass='category-icon' labelClass='category-label'  label='留学'></mu-flat-button>
            </mu-flexbox-item>
          </mu-flexbox>
          <mu-flexbox class="category-flexbox">
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='work' iconClass='category-icon' labelClass='category-label'  label='工作'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='laptop' iconClass='category-icon' labelClass='category-label' label='互联网'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='local_library' iconClass='category-icon' labelClass='category-label'  label='学习'></mu-flat-button>
            </mu-flexbox-item>
            <mu-flexbox-item class="flex-item">
              <mu-flat-button icon='directions_bike' iconClass='category-icon' labelClass='category-label'  label='运动'></mu-flat-button>
            </mu-flexbox-item>
          </mu-flexbox>
        </div>
        <div class="button-wrap">
          <mu-raised-button class="button" label='提交' primary />
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
    padding: 10px 20px 20px;
    .input-label{
      font-size: 20px;
    }
    .input-content,.mu-dropDown-menu-text-overflow,{
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
  .button-wrap{
    text-align: center;
    margin-top: 20px;
    .button{
      width:160px;
    }
  }
}
</style>
