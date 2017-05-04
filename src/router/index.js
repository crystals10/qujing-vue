import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/entry/index/home/Home'
import Message from '@/entry/index/message/Message'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})
