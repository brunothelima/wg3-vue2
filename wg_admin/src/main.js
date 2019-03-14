import Vue from 'vue'
import Vuex from 'vuex'
import Wg from 'wg_core/Wg.js'
// Router configuration
import router from './router'
import store from './store'
import i18n from './i18n'
// Initial .vue file
import WgApp from './WgApp.vue'

Vue.config.productionTip = true

/** 
 * WgAdmin initializer
*/
Wg.getPurchasedModules().then(modules => {
  Wg.importModules(Vue, modules, store).then(() => {
    new Vue({
      i18n,
      router: router,
      store: new Vuex.Store(store),
      render: html => html(WgApp)
    }).$mount('#WgAdmin')
  })
})
