<template>
  <div id="app">
    <mu-appbar title="申请开通取经分站" class='appbar' titleClass="appbar-title" />
    <mu-stepper class="auth-stepper" :activeStep="activeStep">
      <mu-step>
        <mu-step-label class="auth-step-label">填写信息</mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-label class="auth-step-label">完成</mu-step-label>
      </mu-step>
    </mu-stepper>
    <div class="auth-stepper-content">
      <template v-if="activeStep == 0">
        <div class="auth-stepper-form">
          <mu-text-field class="register-text-field" v-model='m_school_name' label='学校名称：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_mp_name' label='您运营的公众号名称或者门户网站的网址：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_mp_num' label='公众号的粉丝数量或者网站的日访问量：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_wechat' label='您的个人微信号：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_email' label='您的邮箱：' fullWidth/>
        </div>
      </template>
      <template v-else-if="activeStep == 1">
        <div class="auth-stepper-success">
          <mu-icon value="check_circle" color="#7e57c2" :size='100' />
          <p class='success-text'>信息提交成功</p>
          <p class='success-text'>我们会在一个工作日内审核您的信息</p>
        </div>
      </template>
      <p class='tip' v-show='activeStep<1'>注意：请如实填写上述信息，一个工作日内会有工作人员与您联系。</p>
      <div class="button-wrap" v-show='activeStep<1'>
        <mu-raised-button label='确认提交' @click='f_apply' primary />
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
      m_school_name: '',
      m_mp_name: '',
      m_mp_num: '',
      m_wechat: '',
      m_email: ''
    }
  },
  methods: {
    f_apply () {
      if (this.m_school_name.trim() == '') {
        this.$warn('请填写您的学校名称')
        return
      }
      if (this.m_mp_name.trim() == '') {
        this.$warn('您所运营的公众号名称或者门户网站的网址')
        return
      }
      if (this.m_mp_num.trim() == '') {
        this.$warn('公众号的粉丝数量或者网站的日访问量')
        return
      }
      if (this.m_wechat.trim() == '') {
        this.$warn('请填写您的微信号')
        return
      }
      if (this.m_email.trim() == '') {
        this.$warn('请填写您的邮箱')
        return
      }
      this.register_station({
        schoolName: this.m_school_name,
        mpName: this.m_mp_name,
        mpNum: this.m_mp_num,
        email: this.m_email,
        wechat: this.m_wechat
      }).then(function (data) {
        if (data.status == 'ok') {
          this.activeStep = 1
        } else {
          this.$warn(data.message)
        }
      })
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
    padding: 0 50px;
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
    .mu-raised-button {
      border-radius: 40px;
      line-height: 44px;
      height: 44px;
      width: 240px;
    }
  }
}
</style>
