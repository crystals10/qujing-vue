<template>
  <transition name='card-fade'>
    <div class='card-fade-item'>
      <div id="skill-card" classs="clearfix">
        <div class="card-left">
          <p class="skill-title txt-em"><span class='tag'>{{data.tagName}}</span>{{data.skill.title}}</p>
          <p class="skill-intro txt-small">{{data.skill.description}}</p>
        </div>
        <div class="card-right txt-center">
          <p class='time-and-price'>
            <span class='time'>{{data.skill.totalTime}}小时/</span><span class='price'>{{data.skill.totalPrice}}元</span>
          </p>
          <p><span class="num">{{data.skill.orderTimes}}人/</span>想见</p>
          <p><span class="num">{{data.skill.orderedTimes}}人/</span>见过</p>
        </div>
        <slot>
          <mu-flat-button class="skill-cancel-button" @click='f_open_dialog' label="删除" primary/>
        </slot>
      </div>
      <mu-dialog class="confirm-dialog" bodyClass='confirm-dialog-body' title="确定要删除这个技能吗？" titleClass="dialog-title" :open='m_dialog'>
        <mu-flat-button label="取消" slot="actions" @click='f_close_dialog' primary/>
        <mu-flat-button label="确定" slot="actions" @click='f_cancel_skill(data.skill.skillId)' primary/>
      </mu-dialog>
    </div>
  </transition>
</template>
<script>
export default {
  name: "skill-card",
  data: function data() {
    return {
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
    f_cancel_skill: function (skillId) {
      this.delete_skill(skillId).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('删除成功', function () {
            this.f_close_dialog()
          }.bind(this), 1000)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../scss/_variables.scss";
.card-fade-item{
  position: relative;
}
#skill-card{
  margin: 0 auto 20px;
  border-radius: 8px;
  background-color: #fff;
  padding-right: 110px;
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
    right:100px;
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
    right:100px;
    box-shadow: inset 3px 0px 6px #ddd;
  }
  .card-left{
    padding:12px 15px;
    text-align: justify;
    min-height: 160px;
    .skill-title{
      line-height: 20px;
    }
    .tag{
      font-size: 12px;
      font-weight: lighter;
      vertical-align: 1px;
      padding: 0 2px;
      margin-right: 4px;
      border: 1px solid $primary-color;
      color: $primary-color;
      border-radius: 4px;
      height: 18px;
      line-height:18px;
      display: inline-block;
    }
    .skill-intro{
      margin-top: 4px;
      color: #666;
    }
    border-right: 1px dashed $primary-color;
  }
  .card-right{
    width:110px;
    top:16px;
    right:0;
    position: absolute;
    font-size: 12px;
    p{
      margin-bottom: 6px;
    }
    .time,.num{
      font-size: 18px;
      color: $primary-color;
    }
    .skill-price{
      color: #666;
      .price{
        font-size: 18px;
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
    // .tag{
    //   position: absolute;
    //   top: -30px;
    //   right:6px;
    //   border-radius: 4px;
    //   display: inline-block;
    //   padding:2px 6px;
    //   color: #666;
    //   border: 1px solid #999;
    // }
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
