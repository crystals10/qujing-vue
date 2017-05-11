// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'scss/auth.scss'
import Muse from '@/mixins/Muse.js'
import Http from '@/mixins/Http.js'
import LoginPanel from 'components/Login'
import WarnPanel from 'components/Warn'
import VueResource from 'vue-resource'

Vue.use(Http)
Vue.use(Muse)
Vue.use(LoginPanel)
Vue.use(WarnPanel)
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
