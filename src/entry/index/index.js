// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
import router from 'router'
import 'scss/index.scss'
import Muse from '@/mixins/Muse.js'
import Http from '@/mixins/Http.js'
import LoginPanel from 'components/Login'
import WarnPanel from 'components/Warn'
import Filter from '../../utils/Filter.js'
import Utils from '../../utils/Utils.js'

Vue.use(Muse)
Vue.use(Http)
Vue.use(VueResource)
Vue.use(LoginPanel)
Vue.use(WarnPanel)
Vue.use(Filter)
Vue.use(Utils)

// router.beforeEach((to, from, next) => {
//   if (to.path.indexOf('/home') != -1) {
//     console.log(to.path)
//   }
//   next()
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
