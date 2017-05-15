// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import List from './List'
import Open from './Open'
import Muse from '@/mixins/Muse.js'
import Router from 'vue-router'
import '@/scss/index.scss'
import Http from '@/mixins/Http.js'
import WarnPanel from '@/components/Warn'
import VueResource from 'vue-resource'

Vue.use(Http)
Vue.use(Muse)
Vue.use(Router)
Vue.use(WarnPanel)
Vue.use(VueResource)

let router = new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'List' }
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/open',
      name: 'Open',
      component: Open
    }
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
