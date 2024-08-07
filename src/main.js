import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import HtmlToPdf from '@/utils/htmlToPdf'
import hasPermission from '@/directive/has'
import VueLazyload from 'vue-lazyload'
// 图片懒加载
// Vue.use(VueLazyload)
import loadimage from '@/assets/loading.png'
import errorimage from '@/assets/images/xxth.png'
import Bus from '@/utils/bus'
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1
})

// html 生成pdf
Vue.use(HtmlToPdf)
Vue.config.productionTip = false

// 引入element-ui库

Vue.use(ElementUI)
// 自定义指令
Vue.use(hasPermission)

// 方案一：
document.addEventListener('DOMContentLoaded', (event) => {
  console.log('first contentful painting')
})
var data = performance.getEntriesByName('first-contentful-paint')[0]
console.log('data',data)
Vue.prototype.$bus = new Bus();
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
