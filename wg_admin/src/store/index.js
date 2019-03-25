/**
 * Export for the admin main store object.
 * This object extends every installed module sotres as store modules,
 *  referenced by its module name
 */
export default {
  state: {
    theme: 'light',
  },
  getters: {
    currTheme: state => state.theme,
  },
  mutations: {
    setTheme(state, payload) {
      state.theme = payload
    },
  },
  modules: {}
}
