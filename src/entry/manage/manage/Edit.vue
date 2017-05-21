<template>
  <div id="edit-info" class="edit-info">
    <div class="edit-header">
      <span class="title">修改信息</span>
      <!-- <span class='tip'>（对本站所有用户的管理）</span> -->
      <!-- <div class="search-wrap">
        <mu-text-field icon='search' fullWidth hintText='搜索用户昵称' hintTextClass='hint-text' inputClass='search-input' underlineFocusClass='underline-focus'>
        </mu-text-field>
      </div> -->
    </div>
    <div class="edit-content">
      <div class="base-info-wrap edit-info-wrap">
        <p class="header"><span>修改基本用户基本信息</span></p>
        <div class="base-info-form edit-info-form">
          <div class="avatar-edit-wrap">
            <mu-avatar :src='m_avatar' class="avatar-wrap" :size='80' />
            <br>
            <mu-flat-button class="avatar-button" primary type='file' labelClass='register-button' label='点此修改头像'>
              <input type="file" class="file-button" @change='f_upload_avatar($event)'>
            </mu-flat-button>
          </div>
          <mu-text-field class="register-text-field" v-model='m_nickname' label='用户昵称' inputClass='input-content'  fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_grade' label='入学年份：' inputClass='input-content'  fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_major' label='所在院系：' inputClass='input-content' fullWidth/>
          <mu-text-field class="register-text-field" v-model='m_password' label='登录密码：' inputClass='input-content' fullWidth/>
        </div>
      </div>
      <div class="base-info-wrap edit-info-wrap">
        <p class="header"><span>修改基本用户认证信息</span></p>
        <div class="base-info-form edit-info-form" v-if='m_user_info.type=="m"'>
          <mu-text-field label='真实姓名：' v-model='m_name' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='校内头衔：' v-model='m_title' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='个人情况描述' v-model='m_introduce' labelClass="input-label" inputClass='input-content' multiLine fullWidth :rows="3" :rowsMax="3" :maxLength="600" />
          <mu-text-field label='微信号：' v-model='m_wechat' labelClass="input-label" inputClass='input-content'  fullWidth/>
          <mu-text-field label='手机号：' v-model='m_phone' labelClass="input-label" inputClass='input-content'  fullWidth/>
        </div>
        <div v-else class="not-major">
          <mu-icon value='stars' :size='90' />
          <p class='tip'>该用户尚未认证行家</p>
        </div>
      </div>
      <div class="button-wrap">
        <mu-raised-button label="提交修改" @click="f_edit_user_info" primary/>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "user-info",
  data: function data() {
    return {
      m_user_id:'',
      m_user_info: {},
      m_nickname: '',
      m_major: '',
      m_grade: '',
      m_password: '',
      m_avatar: '',
      m_name:'',
      m_title:'',
      m_wechat: '',
      m_phone: '',
      m_introduce: ''
    }
  },
  mounted () {
    this.m_user_id = this.$route.params.userId
    this.get_user_info(this.m_user_id).then(function (data) {
      if (data.status == 'ok') {
        let result = data.result.user
        this.m_user_info = result
        this.m_avatar = result.avatar
        this.m_nickname = result.nickname
        this.m_name = result.name
        this.m_grade = result.grade
        this.m_major = result.major
        this.m_introduce = result.introduce
        this.m_wechat = result.wechat
        this.m_phone = result.phone
        this.m_title = result.title
        this.m_password = result.password
      }
    })
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
       this.upload_user_avatar(this.m_user_id, file).then(function (data) {
         if (data.status == 'ok') {
           this.m_avatar = data.result
           this.$warn('头像修改成功')
         }
       })
    },
    f_edit_user_info () {
      this.edit_user_info(this.m_user_id, {
        name: this.m_name,
        password: this.m_password,
        nickname: this.m_nickname,
        grade: this.m_grade,
        major: this.m_major,
        introduce: this.m_introduce,
        title: this.m_title,
        phone: this.m_phone,
        wechat: this.m_wechat
      }).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('信息修改成功')
        } else {
          this.$warn(data.message)
        }
      })
    }
  }
}
</script>
<style lang="scss">
@import "../../../scss/_variables.scss";
.edit-info{
  position: relative;
  .edit-header{
    height: 70px;
    line-height: 70px;
    padding-left: 40px;
    position:relative;
    border-bottom: 1px solid #ddd;
    .title{
      font-size: 18px;
    }
  }
  .edit-content{
    position: relative;
    min-height: 400px;
    height: 100%;
    padding:20px;
    text-align: center;
    .edit-info-wrap{
      display: inline-block;
      border: 1px solid #ddd;
      width:45%;
      margin-right: 30px;
      height: 530px;
      padding:15px;
      vertical-align: middle;
      border-radius: 4px;
      &:last-child{
        margin-right: 0;
      }
      .header{
        text-align: center;
        font-size: 16px;
        color: $primary-color;
        padding-bottom: 20px;
        span{
          display: inline-block;
          padding: 0 4px 4px;
          border-bottom: 4px solid $primary-color;
        }
      }
      .not-major{
        color: rgba($primary-color, 0.7)
      }
      .edit-info-form{
        .input-content{
          font-size: 14px;
        }
        .avatar-edit-wrap{
          text-align: center;
        }
        .avatar-button{
          margin-top: 4px;
          .file-button{
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            opacity: 0;
          }
        }
      }
    }
    .button-wrap{
      margin-top: 20px;
      .mu-raised-button{
        width:300px;
        line-height: 40px;
        height:40px;
        border-radius: 24px;
      }
    }
  }
}
</style>
