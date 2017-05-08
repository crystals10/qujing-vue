<template>
  <mu-dialog dialogClass="register-dialog" actionsContainerClass='register-dialog-actions' bodyClass='register-dialog-body' :open='m_register_dialog'>
    <mu-icon-button icon="close" class="register-close" @click='f_close'/>
    <div class="register-wrap" v-if="m_type==1">
      <p class='header txt-center txt-primary'>用户注册</p>
      <mu-stepper class="register-stepper" :activeStep="m_step">
        <mu-step>
          <mu-step-label class="register-step-label"></mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label class="register-step-label"></mu-step-label>
        </mu-step>
        <mu-step>
          <mu-step-label class="register-step-label"></mu-step-label>
        </mu-step>
      </mu-stepper>
      <div class="register-form" v-show='m_step==0'>
        <mu-text-field class="register-text-field" v-model='m_nickname' label='昵称：' labelClass='register-label' inputClass='register-input' fullWidth/>
        <mu-text-field class="register-text-field" v-model='m_major' label='院系：' labelClass='register-label' inputClass='register-input' fullWidth/>
        <mu-text-field class="register-text-field" v-model='m_grade' label='入学年份：' labelClass='register-label' inputClass='registerinput' fullWidth/>
      </div>
      <div class="register-form" v-show='m_step==1'>
        <div class="id-img-wrap">
          <img v-bind:src="m_id_src" class="id-img">
        </div>
        <p class='tip' style='margin-top:10px;font-size:14px;'>为了验证您的学生身份(<span class='txt-small'>图片大小不大于2M</span>)：</p>
        <mu-raised-button class="id-card-button" primary type='file' labelClass='register-button' label='请上传您的学生证正面图片(如上图)'>
          <input type="file" class="file-button" @change='f_upload_id_img($event)'>
        </mu-raised-button>
      </div>
      <div class="register-form" v-show='m_step==2'>
        <!-- <mu-text-field class="register-text-field" label='电话号码：' inputClass='register-input' labelFloat fullWidth/> -->
        <mu-text-field v-model='m_password' labelClass='register-label' type='password' class="register-text-field" label='密码：' inputClass='register-input' fullWidth/>
        <mu-text-field v-model='m_password_again' labelClass='register-label' type='password' class="register-text-field" label='确认密码：' inputClass='registerinput' fullWidth/>
      </div>
      <div class="register-form" v-show='m_step==3'>
        <div class="register-success">
          <p class='success-text'>注册成功</p>
          <mu-icon value="check_circle" color="#7e57c2" :size='100' />
        </div>
      </div>
    </div>
    <div v-else class="register-wrap">
      <p class='header txt-center txt-primary'>用户登录</p>
      <div class="register-form">
        <mu-text-field labelClass='register-label' v-model='m_login_nickname' class="register-text-field" label='昵称：' inputClass='register-input' fullWidth/>
        <mu-text-field labelClass='register-label' v-model='m_login_password' class="register-text-field" label='密码：' inputClass='register-input' type='password' fullWidth/>
      </div>
    </div>

    <template v-if='m_type==1'>
      <mu-flat-button v-show='m_step!=3' label="已有账号" class="login-button" @click='f_change_login' slot="actions" primary/>
      <mu-flat-button v-show='m_step!=0 && m_step !=3' label="上一步" @click='f_prev' slot="actions" primary/>
      <mu-flat-button v-show='m_step < 3' :label="m_step!=2? '下一步': '提交注册'" @click='f_next' slot="actions" primary/>
    </template>
    <template v-else>
      <mu-flat-button label="注册账号" class="login-button" @click='f_change_register' slot="actions" primary/>
      <mu-flat-button label='登录' @click='f_login' slot="actions" primary/>
    </template>
  </mu-dialog>
</template>
<script>
export default {
  data () {
    return {
      m_step: 0,
      m_id_src: require('../../assets/id.png'),
      m_nickname: '',
      m_grade: '',
      m_major: '',
      m_password: '',
      m_password_again: '',
      m_login_nickname: '',
      m_login_password: '',
      m_id_img: ''
    }
  },
  methods: {
    f_prev: function () {
      this.m_step--
    },
    f_upload_id_img: function (event) {
      let file = event.target.files[0]
      if (['gif', 'jpg', 'jpeg', 'png'].indexOf(file.type.split('/')[1].toLowerCase()) === -1) {
        return this.$warn('图片格式不对')
      }
      if(file.size/1024 > 4096){
        return this.$warn.log("图片最大不能超过4Mb")
      }
      this.m_id_img = file
      let reader = new FileReader()
      let self = this
      reader.onload = function(e){
        self.m_id_src = e.target.result
      }
      reader.readAsDataURL(file)
    },
    f_next: function () {
      if (this.m_step == 0){
        if (this.m_nickname.trim() == "" || this.m_major.trim() == "" || this.m_grade.trim() == "" ) {
          this.$warn('信息不能为空')
          return
        }
      }
      if (this.m_step ==1) {
        if (this.m_id_img == "") {
          this.$warn('请上传图片')
          return
        }
      }
      if (this.m_step == 2) {
        if (this.m_password.trim() == "" || this.m_password_again.trim() == "") {
          this.$warn('信息不能为空')
          return
        }

        if (this.m_password != this.m_password_again) {
          this.$warn('两次输入的密码不一致')
          return
        }
      }
      this.m_step ++
    },
    f_login: function () {
      if (this.m_login_nickname.trim() == "" || this.m_login_password.trim() == "") {
        this.$warn('信息不能为空')
        return
      }
    },
    f_change_login: function () {
      this.m_type = 0
    },
    f_change_register: function () {
      this.m_type = 1
    }
  }
}
</script>
<style lang="scss">
.register-dialog{
  width:90%;
  .register-dialog-body{
    padding-top:16px;
    padding-bottom: 10px;
    position: relative;
    overflow: auto !important;
    .register-close{
      position: absolute;
      padding:6px;
      font-size: 20px;
      right:0px;
      top:0px;
    }
  }
  .register-dialog-actions{
    position: relative;
    .login-button{
      position: absolute;
      left:8px;
    }
    .mu-flat-button{
      min-width: 72px;
    }
  }
  .register-wrap{
    .register-text-field{
      margin-bottom: 0;
      min-height: 60px;
      .mu-text-field-content{
        padding-bottom: 0;
      }
    }
    .file-button{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
    }
    .register-input{
      font-size: 14px;
    }
    .register-label{
      font-size: 18px;
    }
    .register-button{
      font-size: 14px;
    }
    .id-card-button{
      margin-top: 10px;
      width: 100%;
      height: 40px;
    }
    .id-img-wrap{
      margin-top: 10px;
      height: 180px;
      text-align: center;
      vertical-align: middle;
      .id-img{
        max-width: 100%;
        max-height: 100%;
        width:auto;
        height: auto;
        vertical-align: middle;
      }
    }
    .header{
      margin-bottom: 12px;
    }
    .register-stepper{
      .register-step-label{
        height: 30px;
        padding-left: 0;
        padding-right: 0;
        .mu-step-label-icon-container{
          margin-left: 16px;
          margin-right: 10px;
        }
      }
    }
    .register-success{
      text-align: center;
      .success-text{
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 14px;
      }
    }
  }

}
</style>
