export default new Vuex.Store({
  state: {
    initialized: false
  },
  mutations: {
    init (state) {
      state.initialized = true;
      console.log('initialized');
    }
  }
})