<template>
  <div id="message">
    <div class="card-wrap">
      <!-- 登录的状态 -->
      <template v-if='m_current_is_login == 1'>
        <!-- 约我的信息 -->
        <template v-show='m_loading'>
          <div v-show='m_loading' class="loading-wrap">
            <img src="../../../assets/loading.svg" class="loading-svg" alt="">
            <p>正在加载</p>
          </div>
        </template>
        <!-- 约见别人的信息 -->
        <template v-if="m_send_message_data.length > 0" >
          <send v-bind:data='item' v-for='item,index in m_send_message_data' :key='index'></send>
        </template>
        <!-- 收到的约见信息 -->
        <template v-if="m_receive_message_data.length > 0" >
          <receive  v-for='item,index in m_receive_message_data' :key='index' v-bind:data='item'></receive>
        </template>
        <!-- 没约人 -->
        <template v-if="m_send_message_data.length == 0 && m_receive_message_data.length == 0 && !m_loading">
          <div class="no-message">
            <mu-icon value='pets' :size='80' />
            <p class='tip'>暂时没有约见信息</p>
          </div>
        </template>
      </template>
      <!-- 没有登录 -->
      <template v-else>
        <div class="no-message">
          <mu-icon value='account_circle' :size='80' />
          <p class='tip'>登录之后才可以查看自己的约见信息</p>
          <mu-flat-button label='现在登录' class='button' target="_blank" @click='f_login_right_now' primary />
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
      m_active_tab: 'tab1',
      m_loading: true,
      m_receive_message_data: [],
      m_send_message_data: []
    }
  },
  mounted() {
    this.f_init()
  },
  methods: {
    f_init () {
      this.is_login().then(function (data) {
        if (data.status == 'ok'){
          this.f_get_send_message()
          this.f_get_receive_message()
        }
      })
    },
    f_get_send_message(){
      this.m_loading = true
      this.fetch_send_order_list().then(function (data) {
        this.m_send_message_data = data.result
        this.m_loading = false
      })
    },
    f_get_receive_message(){
      this.m_loading = true
      this.fetch_receive_order_list().then(function (data) {
        this.m_receive_message_data = data.result
        this.m_loading = false
      })
    },
    f_login_right_now(){
      this.$showRegisterPanel(0, function () {
        this.f_init()
      }.bind(this))
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
  .loading-wrap{
    margin-top: 10px;
    text-align: center;
    transition: height 2s ease;
    color: rgba($primary-color, 0.6);
    .loading-svg{
      width:60px;
    }
  }
  .card-wrap{
    padding: 10px;
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
}
</style>
