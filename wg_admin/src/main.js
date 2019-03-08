import Vue from 'vue'
import Vuex from 'vuex'
import WG3 from 'wg_core/widgrid.js'

import App from './App.vue'
import store from './store.js'

Vue.use(Vuex)
Vue.config.productionTip = false

WG3.getPurchasedModules().then(module => {
  WG3.importModules(Vue, module, store).then(_ => {
    new Vue({
      render: html => html(App),
      store: new Vuex.Store(store)
    }).$mount('#WG3')
  })
})
