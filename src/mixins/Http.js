let Http = {}
let url = 'http://115.28.204.84'
Http.install = function (Vue, options) {
  Vue.mixin({
    data () {
      return {
        m_current_user_id: '',
        m_current_sub_id: '',
        m_is_login: false
      }
    },
    mounted () {
    },
    methods: {
      auto_login () {
        // 如果已经登录则不用再自动登录
        if (this.m_is_login)
          return
        let nickname = localStorage.getItem('nickname')
        let password = localStorage.getItem('password')
        if (nickname!='undefined' && password!='undefined') {
          this.login({
            nickname: nickname,
            password: password
          })
        }
      },
      is_login () {
        return this.$http.get('/api/user/status').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_all_skills (subId) {
        return this.$http.get('/api/skill/search/all/' + subId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      add_user: function (data) {
        return this.$http.post('/api/user/add', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      edit_user: function () {
        return this.$http.post('/api/user/edit', {
          nickname: '子矜',
          grade: '13',
          major: '软件学院软件工程',
          password: '19941210asdfg'
        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      login: function (data) {
        return this.$http.post('/api/user/login', data).then(function (response) {
          let body = response.body
          if (body.status == 'ok') {
            let result = body.result
            this.m_is_login = true
            this.m_current_user_id = result.userId
            this.m_current_sub_id = result.subId
          } else {
            console.log('登录失败')
          }
          return new Promise(function (resolve) {
            resolve(body)
          })
        })
      },
      logout: function () {
        return this.$http.get('/api/user/logout')
          .then(function (response) {
            return new Promise(function (resolve) {
              resolve(response.body)
            })
          })
      },
      fetch_user_info: function (userId) {
        return this.$http.get('/api/user/info/' + userId)
          .then(function (response) {
            return new Promise(function (resolve) {
              resolve(response.body)
            })
          })
      },
      fetch_self_info: function () {
        return this.$http.get('/api/user/info')
          .then(function (response) {
            return new Promise(function (resolve) {
              resolve(response.body)
            })
          })
      },
      update_avatar: function () {
        return this.$http.post('/api/user/avatar/upload',{
          images:''
        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      add_skill: function (data) {
        return this.$http.post('/api/skill/add',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      delete_skill: function (skillId) {
        return this.$http.get('/api/skill/delete/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_skill_list: function (userId) {
        return this.$http.get('/api/skill/list/' + userId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_skill_list_except: function (userId, skillId) {
        return this.$http.get('/api/skill/list/' + userId + '/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_skill_info: function (skillId) {
        return this.$http.get('/api/skill/info/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      search_skill_by_keyword: function (subId,keyword) {
        return this.$http.get('/api/skill/search/keyword/' + subId + '/' + keyword).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      search_skill_by_tag: function (subId,tag) {
        return this.$http.get('/api/skill/search/tag/' + subId + '/' + tag).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      add_order: function (data) {
        return this.$http.post('/api/order/add',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      reject_order: function (orderId) {
        return this.$http.get('/api/order/reject/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      cancel_order: function (orderId) {
        return this.$http.get('/api/order/cancel/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      finish_order: function (orderId) {
        return this.$http.get('/api/order/finish/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      delete_order: function (orderId) {
        return this.$http.get('/api/order/delete/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_send_order_list: function () {
        return this.$http.get('/api/order/from/list').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_receive_order_list: function () {
        return this.$http.get('/api/order/to/list').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_order_info: function (orderId) {
        return this.$http.get('/api/order/info/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      add_comment: function () {
        return this.$http.post('/api/skill/comment/add', {

        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      fetch_skill_comments: function (skillId) {
        return this.$http.get('/api/skill/comments/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      apply_auth: function () {
        return this.$http.get('/api/apply/add', {

        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      }
    }
  })
}
export default Http
