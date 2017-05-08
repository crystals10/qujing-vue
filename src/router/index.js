import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/entry/index/home/Home'
import Message from '@/entry/index/message/Message'
import Skill from '@/entry/index/skill/Skill'
import AddSkill from '@/entry/index/skill/AddSkill'
import User from '@/entry/index/user/User'
import Info from '@/entry/index/user/Info'
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
      path: '/addskill',
      name: 'AddSkill',
      component: AddSkill
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/info',
      name: 'Info',
      component: Info
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
