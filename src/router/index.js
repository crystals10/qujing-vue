import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/entry/index/home/Home'
import Message from '@/entry/index/message/Message'
import Skill from '@/entry/index/skill/Skill'
import User from '@/entry/index/user/User'
import Detail from '@/entry/index/detail/Detail'
import Order from '@/entry/index/order/Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'Home' }
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/home/:category',
      name: 'Home',
      component: Home
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    },
    {
      path: '/skill',
      name: 'Skill',
      component: Skill
    },
    {
      path: '/user',
      name: 'User',
      component: User
    }
  ]
})
