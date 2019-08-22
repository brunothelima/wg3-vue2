import Vue from 'vue'
import { POST } from '@/vendors/js/api'

/**
 * Export for the authentication methods for the admin store.
 * Here we have all the necessaries methods necessary to
 * 	authenticate or log out an user
 */
export default {
  namespaced: true,
  state: {
    user: {},
    jwt: localStorage.getItem('WG_USER_JWT') || ''
  },
  getters: {
    isAuthorized: state => {
      return state.jwt.length === 32
    },
    getJWT: state => {
      return state.jwt
    }
  },
  actions: {
    async login({ commit }, data) {
      const res = await POST('auth_user.php', data)
      commit('setUser', res.user)
      commit('setJWT', res.jwt)
    },
    async logout({ commit }) {
      await POST('auth_user.php')
      commit('setUser', {})
      commit('setJWT', '')
    }
  },
  mutations: {
    setUser(state, payload) {
      Vue.set(state, 'user', payload)
    },
    setJWT(state, payload) {
      state.jwt = payload
      localStorage.setItem(
        'WG_USER_JWT',
        payload
      )
    }
  }
}
