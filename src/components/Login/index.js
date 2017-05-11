function install (Vue) {
  let RegisterConstructor = Vue.extend(require('./Register.vue'))
  let registerInstance = null
  let body = document.getElementsByTagName('body')[0]

  Vue.prototype.$showRegisterPanel = function (type, callback) {
    if (registerInstance) {
      registerInstance.m_register_dialog = true
      registerInstance.m_type = type
      return
    }
    registerInstance = new RegisterConstructor({
      el: document.createElement('div'),
      data () {
        return {
          instance: registerInstance,
          m_type: type,
          m_register_dialog: true,
          resolve: ''
        }
      },
      mounted () {
        this.$nextTick(function () {
          body.appendChild(this.$el)
        })
      },
      methods: {
        f_close: function () {
          registerInstance.m_register_dialog = false
        },
        f_callback () {
          callback && callback()
        }
      }
    })
    return new Promise(function (resolve) {
      registerInstance.resolve = resolve
    })
  }
}

let MyPlugin = {
  install: install
}

module.exports = MyPlugin
