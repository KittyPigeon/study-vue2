import Vue from 'vue'

Vue.directive('tap', {
  bind(el, { value }) {
    el.handler = () => {
      console.log('点击')
    }
    el.addEventListener('click', el.handler)
  },
  unbind(el) {
    console.log('解除绑定')
    el.removeEventListener('click', el.handler)
  }
})
