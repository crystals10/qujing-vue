// 添加一些常用的过滤函数
let Util = {}
Util.install = function (Vue) {
  if (Vue) {
    // 生成随机数
    Vue.prototype.$random = function (start, end) {
      return parseInt(Math.random() * end) + start
    }
  }
}

export default Util
