// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'router/manage.js'
import Muse from '@/mixins/Muse.js'
import WarnPanel from 'components/Warn'
import 'scss/manage.scss'

Vue.use(Muse)
Vue.use(WarnPanel)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
