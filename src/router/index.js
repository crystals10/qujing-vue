import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/entry/index/home/Home'
import Message from '@/entry/index/message/Message'
import Skill from '@/entry/index/skill/Skill'
import User from '@/entry/index/user/User'
import Detail from '@/entry/index/detail/Detail'
import Order from '@/entry/index/order/Order'
import NotFound from '@/entry/index/404.vue'
import About from '@/entry/index/about.vue'

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
    },
    {
      path: '/aboutus',
      name: 'About',
      component: About
    },
    {
      path: '/404',
      name: 'NotFound',
      component: NotFound
    },
    {
      path: '/:type',
      redirect: '/404'
    }
  ]
})
