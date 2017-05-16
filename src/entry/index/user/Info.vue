<template>
<div id='info'>
  <mu-appbar title="个人信息修改" class='appbar' titleClass="appbar-title" />
    <template>
      <div class="info-edit-form">
        <div class="avatar-edit-wrap">
          <mu-avatar :src='m_avatar' class="avatar-wrap" :size='80' />
          <br>
          <mu-flat-button class="avatar-button" primary type='file' labelClass='register-button' label='点此修改头像'>
            <input type="file" class="file-button" @change='f_upload_avatar($event)'>
          </mu-flat-button>
        </div>
        <mu-text-field label='昵称：' v-model='m_nickname' labelClass="input-label" inputClass='input-content'  fullWidth/>
        <mu-text-field label='修改密码：' v-model='m_password' labelClass="input-label" inputClass='input-content'  type='password' hintText='需要修改密码时填写此项' fullWidth/>
        <mu-text-field label='确认密码：' v-model='m_password_again' labelClass="input-label" inputClass='input-content'  type='password' fullWidth/>
        <p class=tip>注意：入学年份与院系信息不可修改。</p>
        <div class="button-wrap" >
          <mu-raised-button class="info-edit-button"  @click='f_edit' label="确定修改" primary />
        </div>
      </div>
    </template>
</div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      activeStep: 0,
      m_avatar: '',
      m_nickname: '',
      m_password: '',
      m_password_again: ''
    }
  },
  mounted() {
    this.is_login().then(function (data) {
      if (data.status == 'unlogin') {
        this.$warn('请先登录', function () {
          this.$showRegisterPanel(0, function () {
            this.f_get_self_info()
          }.bind(this))
        }.bind(this), 500)
      } else if (data.status == 'ok') {
        this.f_get_self_info()
      }
    })
  },
  methods: {
    f_get_self_info () {
      this.fetch_self_info().then(function (data) {
        let result = data.result
        this.m_avatar = result.avatar
        this.m_nickname = result.nickname
      })
    },
    f_upload_avatar (event) {
      let file = event.target.files[0]
      if (['gif', 'jpg', 'jpeg', 'png'].indexOf(file.type.split('/')[1].toLowerCase()) === -1) {
        return this.$warn('图片格式不对')
      }
      if(file.size/1024 > 4096){
        return this.$warn.log("图片最大不能超过4Mb")
      }
       this.upload_avatar(file).then(function (data) {
         if (data.status == 'ok') {
           this.m_avatar = data.result
           this.$warn('头像修改成功')
         }
       })
    },
    f_edit () {
      if(this.m_avatar == '') {
        this.$warn('请上传头像')
        return
      }

      // if (this.m_nickname.trim() == '') {
      //   this.$warn('请填写昵称')
      //   return
      // }
      // if (this.m_password.trim() == '') {
      //   this.$warn('请填写密码')
      //   return
      // }
      // if(this.m_password.trim() != this.m_password_again) {
      //   this.$warn('两次输入的密码不一致')
      //   return
      // }

      this.edit_user({
        nickname: this.m_nickname,
        password: this.m_password
      }).then(function (data) {
        if (data.status == 'unlogin') {
          this.$warn('登录失效，请重新登录')
        }else if (data.status == 'ok'){
          this.$warn('修改信息成功',function () {
            this.$router.push('/user')
          }.bind(this))
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/_variables.scss';
#info{
  height: 100%;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  padding-bottom: 10px;
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .avatar-edit-wrap{
    text-align: center;
  }
  .avatar-button{
    .file-button{
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      opacity: 0;
    }
  }
  .info-edit-form{
    margin-top: 10px;
    padding: 10px 30px;
    background-color: #fff;
    .input-content{
      font-size: 14px;
      color: $primary-color;
    }
    .mu-text-field-hint{
      font-size: 14px;
    }
    .tip{
      color: #666;
      font-size: 12px;
      margin-bottom: 10px;
      margin-top: -10px;
    }
  }
  .button-wrap{
    text-align: center;
    padding: 10px;
    .info-edit-button{
      width: 200px;
      border-radius: 20px;
      height: 40px;
    }
  }
}

</style>
