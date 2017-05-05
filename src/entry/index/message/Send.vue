<template>
  <div id="send-card" clas='message-card'>
    <template>
      <img v-if='m_status==1' src="../../../assets/agree.png" class="status-img" alt="">
      <img v-else-if='m_status==2' src="../../../assets/reject.png" class="status-img" alt="">
      <img v-else-if='m_status==3' src="../../../assets/over.png" class="status-img" alt="">
    </template>
    <div class="card-top">
      <div class="card-tag txt-small txt-center">
        <p>message</p>
        <p>由『取经』发送</p>
      </div>
      <div class="top-line"></div>
      <div class="card-content">
        <p class="txt-center">
          <span class="tip">您想向</span>
          <span class="name txt-big txt-em">{{m_ordered_name}}</span>
          <span class="tip">请教</span></p>
        <p class="txt-em">{{m_skill_intro}}</p>
        <p class="intro"><span class="tip">这是您的描述：</span>{{m_order_intro}}</p>
        <p class='time txt-small txt-right'>{{m_order_create_time}}</p>
      </div>
    </div>
    <div class="card-bottom">
      <div v-if="m_status==0" class="status-wrap">
        <p class='txt-center'>正在等待 <span class="name txt-em">{{m_ordered_name}}</span> 处理</p>
      </div>
      <div v-else-if="m_status==1" class="status-wrap">
        <p class='txt-center'> <span class="name txt-em">{{m_ordered_name}}</span> 已 <span class='txt-big txt-em status'>同意</span> 这次约见。</p>
        <p>
          您可以通过<span class="contact txt-em">『{{m_ordered_contact}}』</span>联系 <span class="name txt-em">{{m_ordered_name}}</span> 并与之共同商定见面的时间及地点，『取经』祝您有一次愉快的约见。
        </p>
        <p>
          <span class="txt-small">约见完成时请点击</span>
          <mu-flat-button label='已完成此次约见' labelClass='button-over-label' @click='f_over' primary />
        </p>
      </div>
      <div v-else-if="m_status==2" class="status-wrap">
        <p class='txt-center'> <span class="name txt-em">{{m_ordered_name}}</span> 已 <span class='txt-big txt-em status'>拒绝</span> 这次约见。</p>
        <p> <span class='reject-reason txt-small'>拒绝原因是：</span>{{m_reject_reason}}</p>
      </div>
      <div v-else="m_status==3" class="status-wrap">
        <p class='txt-center'>您已 <span class='txt-big txt-em status'>完成</span> 这次约见。</p>
      </div>
    </div>
    <div class="card-footer txt-center txt-small">
        <p class='power-by'>POWERED BY BINGYAN STUDIO</p>
    </div>
  </div>
</template>
<script>
export default {
  name: "reseive-card",
  data: function data() {
    return {
      m_status: this.data.status,  //约见信息的状态 未处理：0 同意：1 拒绝：2  约见完成：3
      m_ordered_name: this.data.ordered_name,
      m_order_intro: this.data.order_intro,
      m_ordered_contact: this.data.ordered_contact,
      m_order_create_time: this.data.order_create_time,
      m_skill_intro: this.data.skill_intro,
      m_reject_reason: this.data.reject_reason,
      m_dialog: false
    }
  },
  props: ['data'],
  methods:{
    f_over: function () {
      this.m_status = 3
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#send-card{
  margin: 0 auto 15px;
  background-color: #fff;
  border-radius: 8px;
  position: relative;
  box-shadow: 3px 3px 6px #ddd,
              -3px -3px 6px #ddd;
  &:last-child{
    margin-bottom: 0;
  }
  .status-img{
    top:10px;
    right:10px;
    width:50px;
    position: absolute;
  }
  .card-top{
    min-height: 60px;
    position: relative;
    border-bottom: 1px dashed $primary-color;
    .card-tag{
      width:140px;
      height:40px;
      position: absolute;
      top:0;
      left:50%;
      transform: translateX(-50%);
      background-color: $primary-color;
      border-bottom-left-radius: 6px;
      border-bottom-right-radius: 6px;
      color: #fff;
    }
    .top-line{
      width: 90%;
      margin: auto;
      height: 50px;
      border-bottom: 1px dashed $primary-color;
    }
    .card-content{
      padding: 10px 0;
      width:86%;
      margin: auto;
      .tip{
        color: #aaa;
        font-size: 13px;
      }
    }
  }
  .card-bottom{
    min-height: 40px;
    position: relative;
    .button-wrap{
      text-align: center;
      padding:10px 0;
      background-color: #fff;
      .button{
        margin-right: 40px;
        &:last-child{
          margin-right: 0;
        }
      }
      .button-label{
        font-size: 12px;
      }
    }
    &:before{
      content: '';
      height:20px;
      width:20px;
      border-radius: 50%;
      background-color: $background-color;
      position: absolute;
      top:-10px;
      left:-10px;
      box-shadow: inset -3px 0px 6px #ddd;
    }
    &:after{
      content: '';
      height:20px;
      width:20px;
      border-radius: 50%;
      background-color: $background-color;
      position: absolute;
      top:-10px;
      right:-10px;
      box-shadow: inset 3px 0px 6px #ddd;
    }
  }
  .status-wrap{
    padding: 10px 20px 0;
    p:first-child{
      margin-bottom: 8px;
    }
    .reject-reason{
      font-size: 13px;
      color: #aaa;
    }
    .button-over-label{
      text-decoration: underline;
    }
  }
  .card-footer{
    padding-top: 4px;
    font-style: italic;
    color: #aaa;
  }
}
.reject-reason{
  .dialog-body{
    padding-bottom: 0 !important;
    padding-top: 15px !important;
  }
}
</style>
