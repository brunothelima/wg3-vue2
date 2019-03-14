// Stores to be merged
import WgCoreStore from 'wg_core/store'

export default {
  state: {
    ...WgCoreStore.state
  },
  getters: {
    
    ...WgCoreStore.getters
  },
  actions: {
    ...WgCoreStore.actions
  },
  mutations: {
    ...WgCoreStore.mutations
  },
  modules: {
    ...WgCoreStore.modules
  }
}
