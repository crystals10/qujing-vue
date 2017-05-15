let Admin = {}
let url = 'http://115.28.204.84'
Admin.install = function (Vue, options) {
  Vue.mixin({
    data () {
      return {}
    },
    methods:{
      is_admin_login () {
        return this.$http.get('/api/admin/status').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
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
      edit_user_info (userId, data) {
        return this.$http.post('/api/admin/edit/' + userId, data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      upload_user_avatar (userId, data) {
        var formData = new FormData()
        formData.append('image', data)
        return this.$http.post('/api/admin/avatar/upload/' + userId, formData).then(function (response) {
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
      on_shelf_master (userId) {
        return this.$http.get('/api/admin/masterground/' + userId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      off_shelf_master (userId, data) {
        return this.$http.post('/api/admin/mastershelve/' + userId, data).then(function (response) {
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
      cancel_reject_apply (applyId) {
        return this.$http.get('/api/admin/cancelreject/'+ applyId).then(function (response) {
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
