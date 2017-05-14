<template>
  <div id="manage">
    <div class="manage-back-fixed">
      <div class="manage-back-fixed-inner">
        <div class="iphone-wrap iphone-wrap-1">
          <img class='img-back' src="../../assets/iPhone6.png" alt="">
          <img class="img-front" src="../../assets/display_1.jpeg" alt="">
        </div>
        <div class="iphone-wrap iphone-wrap-2">
          <img class='img-back' src="../../assets/iPhone6.png" alt="">
          <img class="img-front" src="../../assets/display_2.jpeg" alt="">
        </div>
        <p class="name">取经，高校内的技能经验有偿分享平台</p>
        <div class="slogan-wrap">
          <mu-flat-button class='slogan-button' @click='f_open_apply' label='申请接入' />
          <mu-flat-button class='slogan-button' @click='f_open_login' label='直接登录' />
        </div>
      </div>
    </div>
    <div class="intro-wrap">
      <p class='header'>关于"取经"</p>
      <div class="intro-inner-wrap">
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='group' class="intro-icon-wrap" iconClass='intro-icon' :size='100'/>
            <p class='title'>行家指路</p>
            <p class="detail">在『有趣然而无用』大行其道的当下<br>取经所促成的每一次经验交谈<br>都明确指向『有用』</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='attach_money' class="intro-icon-wrap" iconClass='intro-icon'  :size='100'/>
            <p class='title'>省却人情</p>
            <p class="detail">「付费」是一件严肃且不低俗的事情<br>它会让双方都认真对待这次约见<br>且付费是唯一的负担</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <mu-avatar icon='place'class="intro-icon-wrap" iconClass='intro-icon' :size='100'/>
            <p class='title'>按需服务</p>
            <p class="detail">行家与约见者面对面交谈<br>当面解决疑惑的同时<br>还可以后续跟进</p>
          </div>
        </div>
      </div>
    </div>
    <div class="intro-wrap">
      <p class='header'>开通分站条件</p>
      <div class="intro-inner-wrap">
        <div class="intro-item">
          <div class="intro-word">
            <p class="detail">有运营能力的个人和团队</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <p class="detail">拥有一定体量粉丝的校内公众号</p>
          </div>
        </div>
        <div class="intro-item">
          <div class="intro-word">
            <p class="detail">有一定访问量的校内门户网站</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mp-wrap">
      <mu-raised-button labelClass='label' @click='f_open_apply' label='申请开通您学校的取经分站' primary/>
    </div>
    <manage-footer></manage-footer>
    <mu-dialog :open="m_apply_dialog" dialogClass="apply-dialog" title="申请开通取经分站" titleClass='apply-dialog-title'>
      <mu-icon-button icon="close" class="apply-close" @click='f_close_apply'/>
      <div v-show="m_register_step == 1">
        <div class="apply-form">
          <mu-text-field class="register-text-field" v-model='m_school_name' label='学校名称：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_mp_name' label='您所运营的公众号名称或者门户网站的网址：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_mp_num' label='公众号的粉丝数量或者网站的日访问量：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_wechat' label='您的微信号：' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_email' label='您的邮箱：' fullWidth/>
        </div>
        <div class="button-wrap">
          <mu-flat-button primary class='flat-button' @click="f_open_login" label="已有分站，直接登录"/>
          <mu-raised-button primary class='raised-button' @click="f_apply" label="提交申请"/>
        </div>
      </div>
      <div class="register-success txt-center" v-show="m_register_step == 2">
        <mu-icon value="check_circle" color="#7e57c2" :size='100' />
        <p class='success-text'>信息提交成功</p>
        <p class='success-text'>我们会在一个工作日内审核您的信息</p>
      </div>
  </mu-dialog>
  <mu-dialog :open='m_login_dialog' dialogClass="apply-dialog" title="登录取经后台管理中心" titleClass='apply-dialog-title'>
    <mu-icon-button icon="close" class="apply-close" @click='f_close_login'/>
    <div class="apply-form">
      <mu-text-field class="register-text-field" v-model='m_login_email'  label='您的邮箱：' fullWidth/>
      <mu-text-field class="register-text-field" v-model='m_login_password' label='登录密码：' type='password' fullWidth/>
    </div>
    <div class="button-wrap">
      <mu-flat-button primary class='flat-button' @click="f_open_apply" label="尚无分站，前往注册"/>
      <mu-raised-button primary class='raised-button' @click="f_login" label="提交登录"/>
    </div>
  </mu-dialog>
  </div>
</template>
<script>
import ManageFooter from 'components/ManageFooter'
export default {
  name: "manage",
  data: function data() {
    return {
      m_apply_dialog: false,
      m_login_dialog: false,
      m_register_step: 1,
      m_school_name: '',
      m_mp_name: '',
      m_mp_num: '',
      m_wechat: '',
      m_email: '',
      m_login_email: '',
      m_login_password: ''
    }
  },
  methods: {
    f_close_apply () {
      this.m_apply_dialog = false
    },
    f_open_apply () {
      this.m_login_dialog = false
      this.m_apply_dialog = true
    },
    f_close_login () {
      this.m_login_dialog = false
    },
    f_open_login () {
      this.m_apply_dialog = false
      this.m_login_dialog = true
    },
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
          this.m_register_step = 2
        } else {
          this.$warn(data.message)
        }
      })
    },
    f_login () {
      if (this.m_login_email.trim() == '') {
        this.$warn('请填写您的登录邮箱')
        return
      }
      if (this.m_login_password.trim() == '') {
        this.$warn('请填写您的登录密码')
        return
      }
      this.login_station({
        email: this.m_login_email,
        password: this.m_login_password
      }).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('登录成功', function () {
            window.location.href = '/manage.html'
          })
        } else {
          this.$warn(data.message)
        }
      })
    }
  },
  components: {
    ManageFooter
  }
}
</script>
<style lang="scss">
@import '../../scss/_variables.scss';
#manage{
  .manage-back-fixed{
    height: 600px;
    background:url(../../assets/manage_back.jpg) center center #fff;
    background-size: cover;
    overflow: hidden;
    .manage-back-fixed-inner{
      width:1100px;
      margin: auto;
      height:600px;
      position: relative;
    }
    .iphone-wrap{
      position: absolute;
      width:344px;
      &.iphone-wrap-1{
        left:120px;
        bottom:-200px;
        transform: scale(0.9);
      }
      &.iphone-wrap-2{
        z-index: 1;
        left: -100px;
        bottom: -240px;
        transform: scale(0.8);
      }
      .img-front{
        border-radius: 4px;
        top:86px;
        left:46px;
        position: absolute;
        width:253px;
      }
    }
    .name{
      position: absolute;
      top:80px;
      font-size: 30px;
      color: #fff;
      left: 0;
      right:0;
      text-align: center;
    }
    .slogan-wrap{
      position: absolute;
      right:220px;
      top:300px;
      width:400px;
      .slogan-button{
        margin-right: 40px;
        width:120px;
        color: #fff;
        border: 1px solid #fff;
        height: 40px;
        line-height: 40px;
        border-radius: 4px;
        &:last-child{
          margin-right: 0;
        }
      }
    }
  }
  .intro-wrap{
    background-color: #FFF;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px dashed #ddd;
    .intro-inner-wrap{
      width:1100px;
      margin: 0 auto;
    }
    .header{
      font-size: 18px;
      display: inline-block;
      color: $primary-color;
      padding-bottom: 10px;
      margin-bottom: 10px;
      border-bottom: 2px dashed $primary-color;
    }
    .intro-item{
      padding: 20px;
      width: 300px;
      margin-right: 40px;
      display: inline-block;
      border-radius: 4px;
      text-align: center;
      position: relative;
      &:last-child{
        margin-right: 0;
      }
      .intro-word{
        .title{
          font-size: 18px;
          margin-top: 10px;
        }
        .intro-icon-wrap{
          .intro-icon{
            font-size: 50px;
          }
          background-color: $primary-color;
        }
        .detail{
          margin-top: 10px;
          line-height: 1.6;
        }
      }
    }
  }
  .mp-wrap{
    border-bottom: 1px dashed #eee;
    padding:40px 0;
    background-color: #fff;
    text-align: center;
    .mu-raised-button{
      width:300px;
      height: 44px;
      line-height: 44px;
      border-radius: 22px;
      .label{
        font-size: 16px;
      }
    }
  }
}
.apply-dialog{
  width: 500px !important;
  position: relative;
  .mu-dialog-body{
    padding-left: 40px;
    padding-right: 40px;
    .apply-close{
      position: absolute;
      font-size: 30px;
      right:0px;
      top:0px;
    }
  }
  .register-success{
    color: $primary-color;
    font-size: 16px;
    line-height: 2;
    margin-top: 10px;
  }
  .button-wrap{
    text-align: right;
    .flat-button{
      float: left;
      margin-left: -16px;
    }
  }
  .mu-dialog-actions{
    display: none;
  }
  .apply-dialog-title{
    display: block;
    text-align: center;
    font-size: 18px;
  }
}
</style>
