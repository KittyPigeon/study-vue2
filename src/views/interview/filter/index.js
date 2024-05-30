import Vue from 'vue'

// 字符串反向
Vue.filter('reverse', function (value) {
  if (!value) return ''
  return value.split('').reverse().join('')
})

// 千分位
Vue.filter('toThousandFilter', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.replace(value.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, '$1,')
})
