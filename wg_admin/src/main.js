import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import { importModules } from 'wg_utils/mixins/WgInit.js'
import Store from './store.js'

Vue.use(Vuex)
Vue.config.productionTip = false

fetch('http://localhost/widgrid/modules.php')
  .then(resp => resp.json())
  .then(modules => {
    importModules(Vue, modules, Store).then(_ => {
      new Vue({
        render: html => html(App),
        store: new Vuex.Store(Store)
      }).$mount('#WG3')
    })
  })
