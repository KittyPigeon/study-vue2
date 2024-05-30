import Vue from 'vue'

Vue.directive('throttle', {
  bind(el, binding, vnode) {
    let throttleTime = binding.value || 1000
    let cbFun = null
    el.addEventListener(
      'click',
      () => {
        if (!cbFun) {
          cbFun = setTimeout(() => {
            cbFun = null
          }, throttleTime)
        } else {
          event && event.stopImmediatePropagation()
        }
      },
      true
    )
  }
})
