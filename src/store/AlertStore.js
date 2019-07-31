/**
 * Export for the authentication methods for the admin store.
 * Here we have all the necessaries methods necessary to
 * 	authenticate or log out an user
 */
export default {
  namespaced: true,
  state: {
    messages: []
  },
  getters: {
    hasMessages: state => state.messages.length > 0,
    getMessages: state => state.messages
  },
  mutations: {
    addMessage (state, payload) {
      state.messages.push(payload)
    },
    removeMessage (state, payload) {
      state.messages.splice(payload, 1)
    },
    removeLastMessage (state) {
      state.messages.shift()
    }
  }
}
