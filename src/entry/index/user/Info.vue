<template>
<div id='info'>
  <mu-appbar title="个人信息修改" class='appbar' titleClass="appbar-title" />
    <template>
      <div class="info-edit-form">
        <div class="avatar-edit-wrap">
          <mu-avatar :src='m_avatar' class="avatar-wrap" :size='80' />
          <br>
          <mu-flat-button class="avatar-button" primary type='file' labelClass='register-button' label='点此重新上传头像'>
            <input type="file" class="file-button" @change='f_upload_avatar($event)'>
          </mu-flat-button>
        </div>

        <mu-text-field label='昵称：' labelClass="input-label" inputClass='input-content'  fullWidth/>
        <mu-text-field label='入学年份：' labelClass="input-label" inputClass='input-content'  fullWidth/>
        <mu-text-field label='院系：' labelClass="input-label" inputClass='input-content'  fullWidth/>
        <mu-text-field label='微信号（建议绑定，非必须）：' labelClass="input-label" inputClass='input-content'  fullWidth/>
        <div class="button-wrap" >
          <mu-raised-button class="info-edit-button" label="确定修改" primary />
        </div>
      </div>
    </template>
    <!-- <template v-if="activeStep == 1">
      <div class="order-stepper-success">
        <p class='success-text'>预约成功，等待行家确认</p>
        <mu-icon value="check_circle" color="#7e57c2" :size='100' />
      </div>
    </template> -->
</div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      activeStep: 0,
      m_select_value: 0,
      m_avatar: 'http://www.muse-ui.org/images/uicon.jpg',
    }
  },
  methods: {
    f_upload_avatar (event) {
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
        self.m_avatar = e.target.result
      }
      reader.readAsDataURL(file)
    }
  }
}
</script>

<style lang="scss">
@import '../../../scss/_variables.scss';
#info{
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
    margin-top: 20px;
    padding: 10px 30px;
    background-color: #fff;
    .input-content,.mu-dropDown-menu-text-overflow,{
      font-size: 14px;
      color: $primary-color;
    }
  }
  .order-stepper-success{
    text-align: center;
    .success-text{
      padding-top:10px;
      padding-bottom:10px;
      font-size: 16px;
      color: $primary-color;
      font-weight: bold;
    }
    .mu-icon{
      margin-bottom: 20px;
    }
  }
  .button-wrap{
    text-align: center;
    .info-edit-button{
      width: 100%;
      height: 40px;
    }
  }
}

</style>
