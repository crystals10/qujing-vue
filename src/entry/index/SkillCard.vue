<template>
  <div>
    <div id="skill-card" classs="clearfix">
      <div class="card-left">
        <p class="skill-title txt-em">{{m_skill_title}}</p>
        <p class="skill-intro txt-small">{{m_skill_intro}}</p>
      </div>
      <div class="card-right txt-center">
        <p class="skill-price"><span class="price">{{m_skill_price}}</span> 元</p>
        <p class="skill-time"><span class="time">{{m_skill_time}}</span> 小时</p>
        <p class="skill-tag"><span class="tag">{{m_skill_tag}}</span></p>
      </div>
      <slot>
        <mu-flat-button class="skill-cancel-button" @click='f_open_dialog' label="删除" primary/>
      </slot>
    </div>
    <mu-dialog class="confirm-dialog" bodyClass='confirm-dialog-body' title="确定要删除这个技能吗？" titleClass="dialog-title" :open='m_dialog'>
      <mu-flat-button label="取消" slot="actions" @click='f_close_dialog' primary/>
      <mu-flat-button label="确定" slot="actions" @click='f_cancel_skill' primary/>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  name: "skill-card",
  data: function data() {
    return {
      m_skill_title: this.data.skill_title,
      m_skill_intro: this.data.skill_intro,
      m_skill_price: this.data.skill_price,
      m_skill_time: this.data.skill_time,
      m_skill_tag: this.data.skill_tag,
      m_skill_id: this.data.skill_id,
      m_dialog: false
    }
  },
  props:["data"],
  methods: {
    f_open_dialog: function () {
      this.m_dialog = true
    },
    f_close_dialog: function () {
      this.m_dialog = false
    },
    f_cancel_skill: function () {
      this.f_close_dialog()
    }
  }
}
</script>
<style lang="scss">
@import "../../scss/_variables.scss";
#skill-card{
  margin: 10px auto;
  border-radius: 8px;
  background-color: #fff;
  padding-right: 100px;
  position: relative;
  box-shadow: 3px 3px 6px #ddd,
              -3px -3px 6px #ddd;
  &:before{
    content: '';
    height:20px;
    width:20px;
    border-radius: 50%;
    background-color: $background-color;
    position: absolute;
    top:-10px;
    right:90px;
    box-shadow: inset 0 -3px 6px #ddd;
  }
  &:after{
    content: '';
    height:20px;
    width:20px;
    border-radius: 50%;
    background-color: $background-color;
    position: absolute;
    bottom:-10px;
    right:90px;
    box-shadow: inset 3px 0px 6px #ddd;
  }
  .card-left{
    padding:15px;
    text-align: justify;
    min-height: 180px;
    .skill-intro{
      margin-top: 10px;
      color: #666;
    }
    border-right: 1px dashed $primary-color;
  }
  .card-right-wrap{
    position: absolute;
    top:0;
    right:0;
    width:100px;
    height:100%;
    background-color: #b388ff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .card-right{
    width:100px;
    top:20px;
    right:0;
    position: absolute;
    color: #fff;
    .skill-price{
      color: #666;
      .price{
        font-size: 24px;
        color: $primary-color;
      }
    }
    .skill-time{
      color: #666;
      .time{
        font-size: 24px;
        color: $primary-color;
      }
    }
    .skill-tag{
      margin-top: 10px;
      .tag{
        border-radius: 20px;
        display: inline-block;
        padding:2px 6px;
        font-size: 12px;
        color: #666;
        border: 1px solid #999;
      }
    }
  }
  .skill-cancel-button{
    position: absolute;
    bottom: 5px;
    right:6px;
  }
}
.confirm-dialog-body{
  padding: 0 !important;
}
.dialog-title{
  font-size: 16px !important;
}

</style>
