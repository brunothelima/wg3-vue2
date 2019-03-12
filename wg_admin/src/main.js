import Vue from 'vue'
import Vuex from 'vuex'
import Wg from 'wg_core/Wg.js'
// Router configuration
import router from './router'
// Stores to be merged
import WgCoreStore from 'wg_core/store'
import WgAdminStore from './store'
// Initial .vue file
import WgApp from './WgApp.vue'

// Mergin stores into one
const Store = Wg.mergeStores(
  WgAdminStore, 
  WgCoreStore
);

Vue.use(Vuex)
Vue.config.productionTip = true

/** 
 * WgAdmin initializer
*/
Wg.getPurchasedModules().then(modules => {
  Wg.importModules(Vue, modules, Store).then(() => {
    new Vue({
      router: router,
      store: new Vuex.Store(Store),
      render: html => html(WgApp)
    }).$mount('#WgAdmin')
  })
})
