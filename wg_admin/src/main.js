import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'

// Router configuration
import router from './router'
import store from './store'
import i18n from './i18n'

import { getPurchasedModules, importModules } from 'wg_core/wg.js'

// Initial .vue file
import WgApp from './WgApp.vue'

Vue.config.productionTip = true

Vue.use(Vuex)
Vue.use(VueI18n)



/** 
 * WgAdmin initializer
*/
getPurchasedModules().then(modules => {
  importModules(Vue, modules, store, i18n).then(() => {
    new Vue({
      router: router,
      i18n: new VueI18n(i18n),
      store: new Vuex.Store(store),
      render: html => html(WgApp)
    }).$mount('#WgAdmin')
  })
})
