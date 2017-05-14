let Admin = {}
let url = 'http://115.28.204.84'
Admin.install = function (Vue, options) {
  Vue.mixin({
    data () {
      return {
        m_current_user_id: localStorage.getItem('user_id'),
        m_current_sub_id: localStorage.getItem('sub_id'),
        m_current_user_type: localStorage.getItem('user_type'),
        m_current_is_login: localStorage.getItem('is_login')
      }
    },
    methods:{
      login_station (data) {
        return this.$http.post('/api/admin/login',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      logout_station (data) {
        return this.$http.get('/api/admin/logout').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_admin_info(){
        return this.$http.get('/api/admin/info').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      register_station (data) {
        return this.$http.post('/api/opensub/add',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_user_list (data) {
        return this.$http.post('/api/admin/user/list',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_user_info (userId) {
        return this.$http.get('/api/admin/userinfo/' + userId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      add_black_list (userId, data) {
        return this.$http.post('/api/admin/deleteuser/' + userId, data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      remove_black_list (userId) {
        return this.$http.get('/api/admin/recoveruser/' + userId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_apply_list (data) {
        return this.$http.post('/api/admin/applylist', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_apply_info (applyId) {
        return this.$http.get('/api/admin/applyinfo/' + applyId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      pass_apply (applyId) {
        return this.$http.get('/api/admin/proveapply/' + applyId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      reject_apply (data) {
        return this.$http.post('/api/admin/rejectapply', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      cancel_reject_apply (data) {
        return this.$http.post('/api/admin/cancelreject', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      alter_password (data) {
        return this.$http.post('/api/admin/editpassword', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_sub_token () {
        return this.$http.get('/api/admin/token').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_statistic　(type, data) {
        return this.$http.post('/api/statistic/' + type, data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      get_statistic_count () {
        return this.$http.get('/api/statistic/count').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      }
    }
  })
}
export default Admin
