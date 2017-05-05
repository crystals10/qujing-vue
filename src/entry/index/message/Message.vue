<template>
  <div id="message">
    <mu-tabs class='message-tabs' :value="m_active_tab" @change="handleTabChange">
      <mu-tab value="tab1" title="约见我的"/>
      <mu-tab value="tab2" title="我约见的"/>
    </mu-tabs>
    <template v-if='m_active_tab == "tab1"'>
      <div class="card-wrap">
        <template v-for='item in m_receive_message_data'>
          <receive v-bind:data='item'></receive>
        </template>
      </div>
    </template>
    <template v-if='m_active_tab == "tab2"'>
      <div class="card-wrap">
        <template v-for='item in m_send_message_data'>
          <send v-bind:data='item'></send>
        </template>
      </div>
    </template>

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
      m_receive_message_data: [
        {
          status: 0,
          order_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          order_contact: 'cmm123456',
          order_create_time: '2017.03.03'
        },
        {
          status: 1,
          order_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          order_contact: 'cmm123456',
          order_create_time: '2017.03.03'
        },
        {
          status: 2,
          order_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          order_contact: 'cmm123456',
          order_create_time: '2017.03.03'
        },
        {
          status: 3,
          order_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          order_contact: 'cmm123456',
          order_create_time: '2017.03.03'
        }
      ],
      m_send_message_data: [
        {
          status: 0,
          ordered_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          ordered_contact: 'cmm123456',
          reject_reason: '',
          order_create_time: '2017.03.03'
        },
        {
          status: 1,
          ordered_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          ordered_contact: 'cmm123456',
          reject_reason: '时间原因',
          order_create_time: '2017.03.03'
        },
        {
          status: 2,
          ordered_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          ordered_contact: 'cmm123456',
          reject_reason: '时间原因',
          order_create_time: '2017.03.03'
        },
        {
          status: 3,
          ordered_name: '子矜',
          order_id: '123456',
          skill_intro: '两小时教你搭建『取经』这个网站包括后台',
          order_intro: '我是一个技术小白，现在想入门前端以及互联网方向，但是不知道好的学习方法，想向您请教下。',
          ordered_contact: 'cmm123456',
          reject_reason: '',
          order_create_time: '2017.03.03'
        }
      ]
    }
  },
  methods: {
    handleTabChange (val) {
      this.m_active_tab = val
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
  .card-wrap{
    padding: 10px 20px;
  }
}
</style>
