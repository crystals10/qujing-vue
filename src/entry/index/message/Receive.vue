<template>
  <transition name='card-fade'>
    <div id="message-card" clas='message-card'>
      <template>
        <img v-if='data.result==1' src="../../../assets/agree.png" class="status-img" alt="">
        <img v-else-if='data.result==2' src="../../../assets/reject.png" class="status-img" alt="">
        <img v-else-if='data.result==3' src="../../../assets/over.png" class="status-img" alt="">
      </template>
      <div class="card-top">
        <div class="card-tag txt-small txt-center">
          <p>收到的约见信息</p>
          <p>By『取经』</p>
        </div>
        <div class="top-line"></div>
        <div class="card-content">
          <p class="txt-center"><span class="name txt-big txt-em">{{data.fromUserNickname}}</span> <span class="tip">想向您请教</span></p>
          <p class="txt-em">{{data.skillTitle}}</p>
          <p class="intro"><span class="tip">这是他的描述：</span>{{data.orderIntroduction}}</p>
          <p class='time txt-small txt-right'>{{data.createTime | timestampFormat}}</p>
        </div>
      </div>
      <div class="card-bottom">
        <div v-if="data.result==0" class="button-wrap">
          <mu-raised-button label='狠心拒绝' class='button' labelClass='button-label' @click='f_open_reject_dialog' primary />
          <mu-raised-button label='答应约见' class='button' labelClass='button-label' @click='f_open_agree_dialog' primary />
        </div>
        <div v-else-if="data.result==1" class="status-wrap">
          <p class='txt-center'>已 <span class='txt-big txt-em status'>同意</span> 这次约见。</p>
          <p>您可以通过<span class="contact txt-em">『{{data.fromUserWeChat}}』</span>联系<span class="name txt-em"> 子矜 </span>并与之共同商定见面的时间及地点，『取经』祝您有一次愉快的约见。</p>
          <!-- <p>
            <span class="txt-small">约见完成时请点击</span>
            <mu-flat-button label='已完成此次约见' labelClass='button-over-label' @click='f_over(data.orderId)' primary />
          </p> -->
        </div>
        <div v-else-if="data.result==2" class="status-wrap">
          <p class='txt-center'>已 <span class='txt-big txt-em status'>拒绝</span> 这次约见。</p>
          <p> <span class='reject-reason txt-small'>您的拒绝原因是：</span>{{data.rejectReason}}</p>
        </div>
        <div v-else="data.result==3" class="status-wrap">
          <p class='txt-center'>已 <span class='txt-big txt-em status'>完成</span> 这次约见。</p>
          <p> <span class='reject-reason txt-small'>{{data.fromUserNickname}}对您的评论是：</span>{{data.commentContent}}</p>
        </div>
      </div>
      <div class="card-footer txt-center txt-small">
          <p class='power-by'>POWERED BY BINGYAN STUDIO</p>
      </div>
      <mu-dialog dialogClass="reject-reason" bodyClass='dialog-body' :open='m_reject_dialog'>
        <mu-text-field label='您的拒绝原因是：' v-model='m_reject_reason' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="100"/>
        <mu-flat-button label="取消" slot="actions" @click='f_close_reject_dialog' primary/>
        <mu-flat-button label="确定" slot="actions" @click='f_reject(data.orderId)' primary/>
      </mu-dialog>
      <mu-dialog dialogClass="agree-dialog" bodyClass='dialog-body' :open='m_agree_dialog'>
        <p>注意：点击下方『确定』按钮代表您答应此次约见，请及时跟约见者联系。</p>
        <mu-flat-button label="取消" slot="actions" @click='f_close_agree_dialog' primary/>
        <mu-flat-button label="确定" slot="actions" @click='f_agree(data.orderId)' primary/>
      </mu-dialog>
    </div>
  </transition>
</template>
<script>
export default {
  name: "reseive-card",
  data: function data() {
    return {
      m_reject_dialog: false,
      m_agree_dialog: false,
      m_reject_reason: '',
      m_status: data.result
    }
  },
  props: ['data'],
  methods:{
    f_reject: function (orderId) {
      if (this.m_reject_reason.trim() == '') {
        this.$warn('请填写拒绝原因')
        return
      }
      this.reject_order(orderId, {
        rejectReason: this.m_reject_reason
      }).then(function (data) {
        if (data.status == 'ok') {
          this.data.result = 2
          this.f_close_reject_dialog()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_agree: function (orderId) {
      this.agree_order(orderId).then(function (data) {
        if (data.status == 'ok') {
          this.data.result = 1
          this.f_close_agree_dialog()
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_over: function (orderId) {
      this.finish_order(orderId).then(function (data) {
        if (data.status == 'ok') {
          this.data.result = 3
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_open_reject_dialog: function () {
      this.m_reject_dialog = true
    },
    f_close_reject_dialog: function () {
      this.m_reject_dialog = false
    },
    f_open_agree_dialog: function () {
      this.m_agree_dialog = true
    },
    f_close_agree_dialog: function () {
      this.m_agree_dialog = false
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/message.scss';
</style>
