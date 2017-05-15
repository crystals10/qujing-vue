import Vue from 'vue'
import Router from 'vue-router'
import Home from '../entry/manage/Home'

import UserManage from '../entry/manage/manage/User'
import MajorManage from '../entry/manage/manage/Major'
import ApplyManage from '../entry/manage/manage/Apply'
import EditInfo from '../entry/manage/manage/Edit'

import AccessAnalysis from '../entry/manage/analysis/Access'
import OrderAnalysis from '../entry/manage/analysis/Order'
import MajorAnalysis from '../entry/manage/analysis/Major'
import UserAnalysis from '../entry/manage/analysis/User'

import AccountSetting from '../entry/manage/setting/Account'
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
      path: '/userManage',
      name: 'UserManage',
      component: UserManage
    },
    {
      path: '/editinfo/:userId',
      name: 'EditInfo',
      component: EditInfo
    },
    {
      path: '/applyManage',
      name: 'ApplyManage',
      component: ApplyManage
    },
    {
      path: '/majorManage',
      name: 'MajorManage',
      component: MajorManage
    },
    {
      path: '/majorAnalysis',
      name: 'MajorAnalysis',
      component: MajorAnalysis
    },
    {
      path: '/userAnalysis',
      name: 'UserAnalysis',
      component: UserAnalysis
    },
    {
      path: '/orderAnalysis',
      name: 'OrderAnalysis',
      component: OrderAnalysis
    },
    {
      path: '/accessAnalysis',
      name: 'AccessAnalysis',
      component: AccessAnalysis
    },
    {
      path: '/accountSetting',
      name: 'AccountSetting',
      component: AccountSetting
    }
  ]
})
