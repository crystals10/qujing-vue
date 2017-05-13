import Vue from 'vue'
import Router from 'vue-router'
import Home from '../entry/manage/Home'
import User from '../entry/manage/User/User'
import Major from '../entry/manage/Major/Major'
import Apply from '../entry/manage/Apply/Apply'
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
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/apply',
      name: 'Apply',
      component: Apply
    },
    {
      path: '/major',
      name: 'Major',
      component: Major
    }
  ]
})
