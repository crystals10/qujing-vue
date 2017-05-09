let Http = {}
let url = 'http://115.28.204.84'
Http.install = function (Vue, options) {
  Vue.mixin({
    data () {
      return {

      }
    },
    methods: {
      add_user: function () {
        return this.$http.post('/api/user/add', {
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
      login: function () {
        return this.$http.post('/api/user/login', {
          nickname: '子矜',
          password: '19941210asdfg'
        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
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
      get_user_info: function (userId) {
        return this.$http.get('/api/user/info/' + userId)
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
      add_skill: function () {
        return this.$http.post('/api/skill/add',{
        }).then(function (response) {
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
      add_order: function () {
        return this.$http.post('/api/order/add',{
        }).then(function (response) {
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
      fetch_order_list: function () {
        return this.$http.get('/api/order/list').then(function (response) {
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
