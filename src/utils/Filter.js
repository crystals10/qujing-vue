// 添加一些常用的过滤函数
let Filter = {}
Filter.install = function (Vue) {
  if (Vue) {
    // 溢出省略的处理
    Vue.filter('ellipsis', function (value, maxLength) {
      if (value.length > maxLength) {
        return value.substr(0, maxLength - 2) + '...'
      } else {
        return value
      }
    })

    Vue.filter('toLowerCase', function (value) {
      return value.toLowerCase()
    })

    Vue.filter('toUpperCase', function (value) {
      return value.toUpperCase()
    })
    // 计算字符串的长度
    Vue.filter('len', function (value) {
      if (typeof value === 'string') {
        return value.length
      } else {
        return 0
      }
    })
    // 处理时间
    Vue.filter('timeFormat', function (value, len) {
      return value.substr(0, len).replace(/-/g, '/')
    })
    function calLessTen (value) {
      if (value < 10) {
        return '0' + value
      } else {
        return '' + value
      }
    }
    // 处理时间
    Vue.filter('timestampFormat', function (value) {
      let date = new Date(value)
      let year = date.getYear() + 1900
      let month = date.getMonth() + 1
      let day = date.getDate()
      return year + '/' + calLessTen(month) + '/' + calLessTen(day)
    })
  }
}

export default Filter
