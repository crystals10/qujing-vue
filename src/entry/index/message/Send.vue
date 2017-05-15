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
          <p>发出的约见信息</p>
          <p>By『取经』</p>
        </div>
        <div class="top-line"></div>
        <div class="card-content">
          <p class="txt-center">
            <span class="tip">您想向</span>
            <span class="name txt-big txt-em">{{data.toUserName}}</span>
            <span class="tip">请教</span>
          </p>
          <p class="txt-em">{{data.skillTitle}}</p>
          <p class="intro"><span class="tip">这是您的描述：</span>{{data.orderIntroduction}}</p>
          <p class='time txt-small txt-right'>{{data.createTime | timestampFormat}}</p>
        </div>
      </div>
      <div class="card-bottom">
        <!-- 等待行家处理的状态 -->
        <div v-if="data.result==0" class="status-wrap">
          <p class='txt-center'>正在等待 <span class="name txt-em">{{data.toUserName}}</span> 处理</p>
        </div>
        <!-- 行家已经同意的状态 -->
        <div v-else-if="data.result==1" class="status-wrap">
          <p class='txt-center'>
            <span class="name txt-em">{{data.toUserName}}</span> 已 <span class='txt-big txt-em status'>同意</span> 这次约见。</p>
          <p>
            您可以通过<span class="contact txt-em">『{{data.toUserWeChat}}』</span>联系 <span class="name txt-em">{{data.toUserName}}</span> 并与之共同商定见面的时间及地点，『取经』祝您有一次愉快的约见。
          </p>
          <p>
            <span class="txt-small">约见完成时请点击</span>
            <mu-flat-button label='已完成此次约见' labelClass='button-over-label' @click='f_open_finish_dialog' primary />
          </p>
        </div>
        <!-- 行家拒绝的状态 -->
        <div v-else-if="data.result==2" class="status-wrap">
          <p class='txt-center'> <span class="name txt-em">{{data.toUserName}}</span> 已 <span class='txt-big txt-em status'>拒绝</span> 这次约见。</p>
          <p><span class='reject-reason txt-small'>拒绝原因是：</span>{{data.rejectReason}}</p>
        </div>
        <!-- 预约完成的状态 -->
        <div v-else="data.result==3" class="status-wrap">
          <p class='txt-center'>您已 <span class='txt-big txt-em status'>完成</span> 这次约见。</p>
          <p> <span class='reject-reason txt-small'>您对行家的评论是：</span>{{data.commentContent}}</p>
        </div>
      </div>
      <div class="card-footer txt-center txt-small">
          <p class='power-by'>POWERED BY BINGYAN STUDIO</p>
      </div>
      <mu-dialog dialogClass="reject-reason" bodyClass='dialog-body' :open='m_finish_dialog'>
        <mu-text-field v-model='m_comment' label='请您评价此次约见：' inputClass="reject-input" multiLine fullWidth :rows="2" :rowsMax="4" :maxLength="100"/>
        <div class="score-wrap">
          <p class="score-title"> 你给这个行家打几分呢？(<span class="txt-big txt-em txt-primary">{{m_score}}</span>分)</p>
          <mu-slider class="score-slider" :max=10 :min=1 :step=1 v-model='m_score' />
        </div>
        <mu-flat-button label="取消" slot="actions" @click='f_close_finish_dialog' primary/>
        <mu-flat-button label="确定" slot="actions" @click='f_comment(data.orderId, data.skillId)' primary/>
      </mu-dialog>
    </div>
  </transition>
</template>
<script>
export default {
  name: "reseive-card",
  data: function data() {
    return {
      m_finish_dialog: false,
      m_comment: '',
      m_score: 10
    }
  },
  props: ['data'],
  methods:{
    f_open_finish_dialog(){
      this.m_finish_dialog = true
    },
    f_close_finish_dialog(){
      this.m_finish_dialog = false
    },
    f_comment(orderId, skillId) {
      if (this.m_comment.trim() == '') {
        this.$warn('请输入对此次约见的评论')
        return
      }
      this.add_comment({
        content: this.m_comment,
        skillId: skillId,
        score: this.m_score,
        orderId: orderId
      }).then(function (data) {
        if (data.status == 'ok') {
          this.finish_order(orderId).then(function (data) {
            if (data.status == 'ok') {
              this.m_finish_dialog = false
              data.result = 3
            } else {
              this.$warn(data.message)
            }
          })
        } else {
          this.$warn(data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import '../../../scss/message.scss';
</style>
