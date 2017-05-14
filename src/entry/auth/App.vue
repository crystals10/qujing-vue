<template>
  <div id="app">
    <mu-appbar title="认证成为行家" class='appbar' titleClass="appbar-title" />
    <mu-stepper class="auth-stepper" :activeStep="activeStep">
      <mu-step>
        <mu-step-label class="auth-step-label">基本信息</mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="auth-step-label">行家资质</mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="auth-step-label">完成</mu-step-label>
      </mu-step>
    </mu-stepper>
    <div class="auth-stepper-content">
      <template v-if="activeStep == 0">
        <div class="auth-stepper-form">
          <mu-text-field label='真实姓名：' v-model='m_name' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='校内头衔：' v-model='m_title' labelClass="input-label" hintTextClass='input-hint' hintText='如：冰岩作坊队长或者滑板爱好者' inputClass='input-content'  fullWidth/>
          <mu-text-field label='微信号：' v-model='m_wechat' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='手机号：' v-model='m_phone' labelClass="input-label" inputClass='input-content'  fullWidth/>
        </div>
      </template>
      <template v-else-if="activeStep == 1">
        <div class="auth-stepper-form">
          <mu-text-field label='个人情况描述' v-model='m_introduce' hintTextClass='input-hint' labelClass="input-label" hintText='不少于100字（如：前冰岩作坊团队主管、产品组组长，曾在腾讯微信事业群担任产品设计实习，具有一定的互联网产品经验，做过的产品有：校园二手街、匿匿、华中大校园通等近十款，涵盖数十万的大学生用户。也是微信公众号华科学习帝的创建者。）' inputClass='input-content' multiLine fullWidth :rows="5" :rowsMax="8" :maxLength="600" />
          <mu-text-field label='能证明行家身份的获奖记录或其他（非必须）：'  v-model='m_prize'labelClass="input-label" inputClass='input-content' :rows="1" :rowsMax="2" multiLine fullWidth/>
          <mu-text-field label='能证明行家身份的作品链接（非必须）：' type='url'  v-model='m_works' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='身份证明人及其联系方式（非必须）：'  v-model='m_prove' labelClass="input-label" inputClass='input-content' :rows="1" :rowsMax="2" multiLine fullWidth/>
        </div>
      </template>
      <template v-else-if="activeStep == 2">
        <div class="auth-stepper-success">
          <mu-icon value="check_circle" color="#7e57c2" :size='100' />
          <p class='success-text'>信息提交成功</p>
          <p class='success-text'>我们会在一个工作日内审核您的信息</p>
        </div>
      </template>
      <p class='tip' v-show='activeStep<2'>注意：请如实填写上述信息，一个工作日内会有工作人员与您联系，认证您的行家身份。</p>
      <div class="button-wrap" >
        <mu-flat-button v-if='activeStep != 0 && activeStep < 2' class="auth-stepper-button" label="上一步" primary  @click="f_prev"/>
        <mu-raised-button v-if='activeStep < 2' class="auth-stepper-button" label="下一步" primary @click="f_next" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeStep: 0,
      m_name: '',
      m_title: '',
      m_wechat: '',
      m_phone: '',
      m_introduce: '',
      m_prize: '',
      m_works: '',
      m_prove: ''
    }
  },
  methods: {
    f_prev () {
      this.activeStep --
    },
    f_next () {
      if (this.activeStep == 0) {
        if (this.m_name.trim() == '') {
          this.$warn('请填写真实姓名')
          return
        }
        if (this.m_title.trim() == '') {
          this.$warn('请填写校内头衔')
          return
        }
        if (this.m_title.trim() == '') {
          this.$warn('请填写微信号')
          return
        }
        if (this.m_title.trim() == '') {
          this.$warn('请填写手机号')
          return
        }
        this.activeStep ++
      }
      if (this.activeStep == 1) {
        if (this.m_introduce.trim() == '') {
          this.$warn('请填写个人介绍')
          return
        }
        // 发起请求
        this.is_login().then(function (data) {
          if (data.status == 'ok') {
            this.apply_auth({
              name: this.m_name,
              phone: this.m_phone,
              wechat: this.m_wechat,
              title: this.m_title,
              works: this.m_works,
              prove: this.m_prove,
              introduce: this.m_introduce,
              prize: this.m_prize
            }).then(function (data) {
              if (data.status == 'ok') {
                this.activeStep ++
              } else {
                this.$warn('申请失败，请重试')
              }
            })
          } else {
            this.$showRegisterPanel(0)
          }
        })
      }
    }
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
#app {
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .auth-stepper{
    padding: 0 00px;
    background-color: #fff;
    margin-top: 20px;
    .auth-step-label{
      height:50px;
    }
  }
  .auth-stepper-content {
    padding: 10px 20px;
    background-color: #fff;
  }
  .auth-stepper-form{
    .input-label{
      transform: scale(1);
      font-size: 12px;
    }
    .input-content{
      font-size: 14px;
      color: $primary-color;
    }
    .input-hint{
      font-size: 12px;
    }
  }
  .auth-stepper-success{
    text-align: center;
    .success-text{
      line-height: 2;
      font-size: 16px;
      color: $primary-color;
      font-weight: bold;
    }
    .mu-icon{
      margin-top: 20px;
    }
  }
  .tip{
    text-align: justify;
    font-size: 12px;
    padding-bottom: 10px;
    color: #666;
  }
  .button-wrap{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    .auth-stepper-button{
      width: 40%;
    }
  }
}
</style>
