import Vue from 'vue'
import Vuex from 'vuex'

import App from './App.vue'

import store from './store.js'
import { importModules } from 'wg_utils/mixins/WgInit.js'

Vue.use(Vuex)
Vue.config.productionTip = false

fetch('http://localhost/widgrid/modules.php')
  .then(resp => resp.json())
  .then(modules => {
    importModules(Vue, modules, store).then(_ => {
      new Vue({
        render: html => html(App),
        store: new Vuex.Store(store)
      }).$mount('#WG3')
    })
  })
