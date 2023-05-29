export default {
  state: {
    userInfo: {
        name:'宋江',
        age:28
    }
  },
  mutations: {
    setUserInfo(state, data) {
      state.userInfo = data
    }
  },
  actions: {},
  getters: {
    isLogin(state) {
      return state.userInfo ? true : false
    },
    
  }
}
