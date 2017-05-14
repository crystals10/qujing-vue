<template>
  <div id="account-setting" class="account-wrap">
    <div class="account-header">
      <span class="title">账号设置</span>
      <span class='tip'></span>
    </div>
    <div class="account-content">
      <div class="account-item account-url">
        <p class="item-header">获取url链接 <span class="tip">(可放置在您的公众号菜单或者门户网站上)</span></p>
        <div class="item-content">
          <dl>
            <dt>分站首页</dt> <dd>{{'http://localhost:9010/#/home?token=' + m_token}}</dd>
            <dt>用户约见信息页面</dt> <dd>{{'http://localhost:9010/#/message'}}</dd>
            <dt>行家技能列表页面</dt> <dd>{{'http://localhost:9010/#/skills'}}</dd>
            <dt>认证成为行家页面</dt> <dd>{{'http://localhost:9010/auth.html'}}</dd>
          </dl>
        </div>
      </div>
      <div class="account-item">
        <p class="item-header">修改密码</p>
        <div class="item-content">
          <mu-text-field label='旧密码' v-model='m_old_password' type='password' /> <br>
          <mu-text-field label='新密码' v-model="m_new_password" type='password' /> <br>
          <mu-text-field label='重复密码' v-model="m_new_password_again" type='password' /> <br>
          <mu-raised-button label='确定修改' v-on:click='f_alter_password' primary/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "account-setting",
  data: function data() {
    return {
      m_token: '',
      m_old_password: '',
      m_new_password: '',
      m_new_password_again: ''
    }
  },
  mounted(){
    this.get_sub_token().then(function (data) {
      if (data.status == 'ok') {
        this.m_token = data.result
      } else {
        this.$warn(data.message)
      }
    })
  },
  methods: {
    f_alter_password(){
      if (this.m_old_password.trim() == "" ||this.m_new_password.trim() == "" ||this.m_new_password_again.trim() == "" ) {
        this.$warn('请填写完整的信息')
        return
      }
      if (this.m_new_password.trim() != this.m_new_password_again.trim()) {
        this.$warn('两次填写的新密码不一致')
        return
      }
      this.alter_password({
        oldPassword: this.m_old_password,
        newPassword: this.m_new_password
      }).then(function (data) {
        if (data.status == 'ok') {
          this.$warn('修改成功')
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
.account-wrap{
  position: relative;
  .account-header{
    height: 70px;
    line-height: 70px;
    padding-left: 30px;
    position:relative;
    border-bottom: 1px solid #ddd;
    .title{
      font-size: 20px;
    }
  }
  .account-content{
    padding:20px 30px;
    .account-item{
      border: 1px solid #ddd;
      margin-bottom: 20px;
      &:last-child{
        margin-bottom: 0;
      }
      &.account-url{
        dt{
          height: 24px;
          line-height: 24px;
        }
        dd{
          height: 24px;
          line-height: 24px;
          padding-left: 20px;
          margin-bottom: 10px;
          &:last-child{
            margin-bottom: 0;
          }
        }
      }
      .item-header{
        height: 46px;
        line-height: 46px;
        padding-left: 20px;
        font-size: 16px;
        background-color: #f4f5f9;
        border-bottom: 1px solid #e7e7eb;
        .tip{
          font-size: 12px;
        }
      }
      .item-content{
        padding: 10px 0;
        min-height: 60px;
        padding-left: 20px;
        .mu-text-field{
          width: 400px;
        }
        .mu-raised-button{
          width: 160px;
          height: 40px;
          line-height: 40px;
        }
      }
    }
  }
}
</style>
