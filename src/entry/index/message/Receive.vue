<template>
  <div id="message-card" clas='message-card'>
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
        <p class="txt-center"><span class="name txt-big txt-em">{{m_order_name}}</span> <span class="tip">想向您请教</span></p>
        <p class="txt-em">{{m_skill_intro}}</p>
        <p class="intro"><span class="tip">这是他的描述：</span>{{m_order_intro}}</p>
        <p class='time txt-small txt-right'>{{m_order_create_time}}</p>
      </div>
    </div>
    <div class="card-bottom">
      <div v-if="m_status==0" class="button-wrap">
        <mu-raised-button label='狠心拒绝' class='button' labelClass='button-label' @click='f_reject' primary />
        <mu-raised-button label='答应约见' class='button' labelClass='button-label' @click='f_agree' primary />
      </div>
      <div v-else-if="m_status==1" class="status-wrap">
        <p class='txt-center'>已 <span class='txt-big txt-em status'>同意</span> 这次约见。</p>
        <p>您可以通过<span class="contact txt-em">『{{m_order_contact}}』</span>联系<span class="name txt-em"> 子矜 </span>并与之共同商定见面的时间及地点，『取经』祝您有一次愉快的约见。</p>
        <p>
          <span class="txt-small">约见完成时请点击</span>
          <mu-flat-button label='已完成此次约见' labelClass='button-over-label' @click='f_over' primary />
        </p>
      </div>
      <div v-else-if="m_status==2" class="status-wrap">
        <p class='txt-center'>已 <span class='txt-big txt-em status'>拒绝</span> 这次约见。</p>
      </div>
      <div v-else="m_status==3" class="status-wrap">
        <p class='txt-center'>已 <span class='txt-big txt-em status'>完成</span> 这次约见。</p>
      </div>
    </div>
    <div class="card-footer txt-center txt-small">
        <p class='power-by'>POWERED BY BINGYAN STUDIO</p>
    </div>
    <mu-dialog dialogClass="reject-reason" bodyClass='dialog-body' :open='m_dialog'>
      <mu-text-field label='您的拒绝原因是：' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="100"/>
      <mu-flat-button label="确定" slot="actions" @click='f_reject_reason' primary/>
    </mu-dialog>
  </div>
</template>
<script>
export default {
  name: "reseive-card",
  data: function data() {
    return {
      m_dialog: false
    }
  },
  props: ['data'],
  methods:{
    f_agree: function () {
      this.m_status = 1
    },
    f_reject: function () {
      this.m_dialog = true
    },
    f_over: function () {
      this.m_status = 3
    },
    f_reject_reason: function () {
      this.m_dialog = false
      this.m_status = 2
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/message.scss';
</style>
