// Stores to be merged
import Vuex from 'vuex'
import Vue from 'vue'
import WgCoreStore from 'wg_core/store'
import Wg from 'wg_core/Wg.js'

Vue.use(Vuex)

const WgAdminStore =  {
  state: {},
  getters: {},
  actions: {},
  mutations: {},
  modules: {}
}

export default Wg.mergeStores(
  WgAdminStore, 
  WgCoreStore
);