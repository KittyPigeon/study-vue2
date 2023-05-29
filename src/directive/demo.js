import Vue from 'vue'

Vue.directive('demo', function (el, binding, vnode) {
  console.log(el, binding, vnode)
})
