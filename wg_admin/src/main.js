import Vue from 'vue'
import Vuex from 'vuex'
import Wg from 'wg_core/Wg.js'
import WgApp from './WgApp.vue'

import wgCoreStore from 'wg_core/store/index.js'
import wgAdminStore from './store.js'

const store = {
  state: { ...wgCoreStore.state, ...wgAdminStore.state },
  getters: { ...wgCoreStore.getters, ...wgAdminStore.getters },
  actions: { ...wgCoreStore.actions, ...wgAdminStore.actions },
  mutations: { ...wgCoreStore.mutations, ...wgAdminStore.mutations },
  modules: { ...wgCoreStore.modules, ...wgAdminStore.modules }
}

Vue.use(Vuex)
Vue.config.productionTip = true

Wg.getPurchasedModules().then(module => {
  Wg.importModules(Vue, module, store).then(_ => {
    new Vue({
      render: html => html(WgApp),
      store: new Vuex.Store(store)
    }).$mount('#WgApp')
  })
})
