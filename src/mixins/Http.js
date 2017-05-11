let Http = {}
let url = 'http://115.28.204.84'
Http.install = function (Vue, options) {
  Vue.mixin({
    data () {
      return {
        m_current_user_id: localStorage.getItem('user_id'),
        m_current_sub_id: localStorage.getItem('sub_id'),
        m_current_user_type: localStorage.getItem('user_type'),
        m_current_is_login: localStorage.getItem('is_login')
      }
    },
    mounted () {
    },
    methods: {
      // 从 localStorage 获取 userId
      get_self_user_id () {
        return localStorage.getItem('user_id')
      },
      // 从 localStorage 获取 是否登录
      get_is_login () {
        return localStorage.getItem('is_login')
      },
      // 从 localStorage 获取 用户类型 c:普通用户 m:行家
      get_self_user_type () {
        return localStorage.getItem('user_type')
      },
      // 从 localStorage 获取分站 ID
      get_self_sub_id () {
        return localStorage.getItem('sub_id')
      },
      // 登陆的时候 把登陆状态 用户类型 分站 ID 存储在 localStorage 里面
      initLocalStorage (result) {
        this.m_current_is_login = 1
        this.m_current_user_id = result.userId || ''
        this.m_current_sub_id = result.subId || ''
        this.m_current_user_type = result.type || ''
        localStorage.setItem('is_login', 1)
        localStorage.setItem('user_id', result.userId || '')
        localStorage.setItem('user_type', result.type || '')
        localStorage.setItem('sub_id', result.subId || '')
      },
      restartLocalStorage () {
        this.m_current_is_login = false
        this.m_current_user_id = ''
        this.m_current_sub_id = ''
        this.m_current_user_type = ''
        localStorage.removeItem('is_login')
        localStorage.removeItem('user_id')
        localStorage.removeItem('user_type')
        localStorage.removeItem('sub_id')
      },
      // 判断是否登录
      is_login () {
        return this.$http.get('/api/user/status').then(function (response) {
          let body = response.body
          if (body.status == 'ok') {
            this.initLocalStorage(body.result)
          } else {
            this.restartLocalStorage()
          }
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取整个分站的所有技能列表
      fetch_all_skills (subId) {
        return this.$http.get('/api/skill/search/all/' + subId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 新增用户
      add_user: function (data) {
        return this.$http.post('/api/user/add', data).then(function (response) {
          let body = response.body
          if (body.status == 'ok') {
            this.initLocalStorage(body.result)
          } else {
            console.log('登录失败')
          }
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 修改用户信息
      edit_user: function (data) {
        return this.$http.post('/api/user/edit', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 登录注意登录时会更新 localStorage 信息
      login: function (data) {
        return this.$http.post('/api/user/login', data).then(function (response) {
          let body = response.body
          if (body.status == 'ok') {
            this.initLocalStorage(body.result)
          } else {
            console.log('登录失败')
          }
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 退出登录 退出的时候会销毁 localStorage 的信息
      logout: function () {
        return this.$http.get('/api/user/logout').then(function (response) {
          let body = response.body
          if (body.status == 'ok' || data.status == 'unlogin') {
            this.restartLocalStorage()
          } else {
            console.log('登出失败')
          }
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取某个用户的信息
      fetch_user_info: function (userId) {
        return this.$http.get('/api/user/info/' + userId)
          .then(function (response) {
            return new Promise(function (resolve) {
              resolve(response.body)
            })
          })
      },
      // 获取自己的信息
      fetch_self_info: function () {
        return this.$http.get('/api/user/info')
          .then(function (response) {
            return new Promise(function (resolve) {
              resolve(response.body)
            })
          })
      },
      // 更新头像
      update_avatar: function () {
        return this.$http.post('/api/user/avatar/upload',{
          images:''
        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 添加技能
      add_skill: function (data) {
        return this.$http.post('/api/skill/add',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 删除技能
      delete_skill: function (skillId) {
        return this.$http.get('/api/skill/delete/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取某用户的技能列表
      fetch_user_skill_list: function (userId) {
        return this.$http.get('/api/skill/list/' + userId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取个人的技能列表
      fetch_self_skill_list: function () {
        return this.$http.get('/api/skill/list').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取出某项技能外 某人的其他技能列表
      fetch_skill_list_except: function (userId, skillId) {
        return this.$http.get('/api/skill/list/' + userId + '/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取技能信息
      fetch_skill_info: function (skillId) {
        return this.$http.get('/api/skill/info/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 通过关键字搜索
      search_skill_by_keyword: function (subId,keyword) {
        return this.$http.get('/api/skill/search/keyword/' + subId + '/' + keyword).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 通过标签搜索
      search_skill_by_tag: function (subId,tag) {
        return this.$http.get('/api/skill/search/tag/' + subId + '/' + tag).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 预约某行家
      add_order: function (data) {
        return this.$http.post('/api/order/add',data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 拒绝预约
      reject_order: function (orderId, data) {
        return this.$http.post('/api/order/reject/' + orderId, data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 拒绝预约
      agree_order: function (orderId) {
        return this.$http.get('/api/order/agree/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 取消预约
      cancel_order: function (orderId) {
        return this.$http.get('/api/order/cancel/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 完成预约
      finish_order: function (orderId) {
        return this.$http.get('/api/order/finish/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 删除预约
      delete_order: function (orderId) {
        return this.$http.get('/api/order/delete/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取我约见的信息列表
      fetch_send_order_list: function () {
        return this.$http.get('/api/order/from/list').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取约见我的信息列表
      fetch_receive_order_list: function () {
        return this.$http.get('/api/order/to/list').then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取订单信息
      fetch_order_info: function (orderId) {
        return this.$http.get('/api/order/info/' + orderId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 添加评论
      add_comment: function () {
        return this.$http.post('/api/skill/comment/add', {

        }).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 获取技能的评论
      fetch_skill_comments: function (skillId) {
        return this.$http.get('/api/skill/comments/' + skillId).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      },
      // 申请认证成为行家
      apply_auth: function (data) {
        return this.$http.post('/api/apply/add', data).then(function (response) {
          return new Promise(function (resolve) {
            resolve(response.body)
          })
        })
      }
    }
  })
}
export default Http
