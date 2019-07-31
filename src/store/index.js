// Vue instance and Vue plugins imports
import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './AuthStore'
import AlertStore from './AlertStore'

Vue.use(Vuex)

/**
 * Export for the admin main store object.
 * This object extends every installed module sotres as store modules,
 *  referenced by its module name
 */
export default new Vuex.Store({
  namespaced: true,
  state: {
    theme: 'dark',
    locale: 'en'
  },
  getters: {
    currTheme: state => state.theme,
    currLocale: state => state.locale
  },
  mutations: {
    setLocale (state, payload) {
      state.locale = payload
    },
    setTheme (state, payload) {
      state.theme = payload
    }
  },
  modules: {
    auth: AuthStore,
    alert: AlertStore
  }
})
