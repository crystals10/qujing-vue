// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from 'router/manage.js'
import VueResource from 'vue-resource'
import Muse from '@/mixins/Muse.js'
import 'scss/manage.scss'
import WarnPanel from 'components/Warn'
import AdminHttp from '@/mixins/Admin.js'
import Filter from '../../utils/Filter.js'
import Utils from '../../utils/Utils.js'

Vue.use(Muse)
Vue.use(WarnPanel)
Vue.use(VueResource)
Vue.use(AdminHttp)
Vue.use(Utils)
Vue.use(Filter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
