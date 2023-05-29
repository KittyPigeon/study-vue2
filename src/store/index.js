import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'hello world',
    price: 1.0,
    count: 0
  },
  getters: {},
  mutations: {
    addCount(state) {
      state.count += 1
    }
  },
  actions: {
    asyncAddCount({ commit, state }) {
      state.count += 1
    }
  },
  modules: {
    user
  }
})
