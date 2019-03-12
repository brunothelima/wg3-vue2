import Vue from 'vue'
import Vuex from 'vuex'
import Wg from 'wg_core/Wg.js'
import WgApp from './WgApp.vue'

import router from './router'

import wgCoreStore from 'wg_core/store'
import wgAdminStore from './store'

const store = Wg.mergeStores(
  wgAdminStore, 
  wgCoreStore
);

Vue.use(Vuex)
Vue.config.productionTip = true

Wg.getPurchasedModules().then(module => {
  Wg.importModules(Vue, module, store).then(() => {
    new Vue({
      router: router,
      store: new Vuex.Store(store),
      render: html => html(WgApp)
    }).$mount('#WgApp')
  })
})
