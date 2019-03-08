import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import { getPurchasedModules, importModules } from 'wg_core/index.js'
import Store from './store.js'

Vue.use(Vuex)
Vue.config.productionTip = false

getPurchasedModules().then(modules => {
  importModules(Vue, modules, Store).then(_ => {
    new Vue({
      render: html => html(App),
      store: new Vuex.Store(Store)
    }).$mount('#WG3')
  })
})