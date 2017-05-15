// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Muse from '@/mixins/Muse.js'
import '@/scss/manage.scss'
import WarnPanel from '@/components/Warn'
import VueResource from 'vue-resource'
import AdminHttp from '@/mixins/Admin.js'

Vue.use(Muse)
Vue.use(VueResource)
Vue.use(WarnPanel)
Vue.use(AdminHttp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
