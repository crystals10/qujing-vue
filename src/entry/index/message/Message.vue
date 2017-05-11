<template>
  <div id="message">
    <mu-tabs class='message-tabs' :value="m_active_tab" @change="handleTabChange">
      <mu-tab value="tab2" title="我想约的"/>
      <mu-tab value="tab1" title="想约我的"/>
    </mu-tabs>
    <div class="card-wrap">
      <!-- 登录的状态 -->
      <template v-if='get_is_login() == 1'>
        <!-- 约我的信息 -->
        <template v-if='m_active_tab == "tab1"'>
          <!-- 是行家 -->
          <template v-if='get_self_user_type() == "m"'>
            <!-- 有人约 -->
            <template v-if="m_receive_message_data.length > 0" >
              <receive  v-for='item,index in m_receive_message_data' :key='index' v-bind:data='item'></receive>
            </template>
            <!-- 没人约 -->
            <template v-else>
              <div class="no-message">
                <mu-icon value='pets' :size='80' />
                <p class='tip'>暂时没有人约您</p>
                <p class='tip'>您可以尝试发布更多优质的内容</p>
                <mu-flat-button label='现在去发布技能' class='button' target="_blank" to="/addskill" primary />
              </div>
            </template>
          </template>
          <!-- 不是行家 -->
          <template v-else>
            <div class="no-message">
              <mu-icon value='stars' :size='80' />
              <p class='tip'>需要认证成为行家才可以接收别人的约见</p>
              <mu-flat-button label='现在去认证' class='button' target="_blank" href="/auth.html" primary />
            </div>
          </template>
        </template>
        <!-- 我约的信息 -->
        <template v-if='m_active_tab == "tab2"' >
          <!-- 约了人 -->
          <template v-if="m_send_message_data.length > 0" >
            <send v-bind:data='item' v-for='item,index in m_send_message_data' :key='index'></send>
          </template>
          <!-- 没约人 -->
          <template v-else>
            <div class="no-message">
              <mu-icon value='pets' :size='80' />
              <p class='tip'>您暂时没有约过任何人</p>
              <mu-flat-button label='去首页看看' class='button' target="_blank" to="/home" primary />
            </div>
          </template>

        </template>
      </template>
      <!-- 没有登录 -->
      <template v-else>
        <div class="no-message">
          <mu-icon value='account_circle' :size='80' />
          <p class='tip'>登录之后才可以查看自己的技能列表</p>
          <mu-flat-button label='现在登陆' class='button' target="_blank" @click='f_login_right_now' primary />
        </div>
      </template>
    </div>
  </div>
</template>
<script>
import Receive from './Receive'
import Send from './Send'
export default {
  name: "message",
  data: function data() {
    return {
      m_active_tab: 'tab2',
      m_receive_message_data: [],
      m_send_message_data: []
    }
  },
  mounted() {
    this.is_login().then(function (data) {
      if (data.status == 'ok'){
        this.f_get_send_message()
        this.f_get_receive_message()
      }
    })
  },
  methods: {
    handleTabChange (val) {
      this.m_active_tab = val
    },
    f_get_send_message(){
      this.fetch_send_order_list().then(function (data) {
        this.m_send_message_data = data.result
      })
    },
    f_get_receive_message(){
      this.fetch_receive_order_list().then(function (data) {
        this.m_receive_message_data = data.result
      })
    },
    f_login_right_now(){
      this.$showRegisterPanel(0, function () {
        window.location.reload()
      })
    }
  },
  components: {
    Receive,
    Send
  }
}
</script>
<style lang="scss">
@import '../../../scss/_variables.scss';
#message{
  .appbar{
    height: 50px;
    .appbar-title{
      text-align: center;
      font-size: 16px;
    }
  }
  .message-tabs{
    margin: 0 auto 10px;
  }
  .no-message{
    padding-top: 40px;
    text-align: center;
    color: rgba($primary-color, 0.6);
    .button{
      margin-top: 10px;
      .mu-flat-button-label{
        font-size: 16px;
        text-decoration: underline;
      }
    }
  }
  .card-wrap{
    padding: 10px;
  }
}
</style>
