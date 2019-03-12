import Vue from 'vue/dist/vue.js'
import Vuex from 'vuex'

import Wg from './Wg.js'
import Store from './store/index.js'

Vue.use(Vuex);

/**
 * Widgrid runtime initialization
 */
Wg.getPurchasedModules().then(modules => {
  modules.map(module => Wg.installModule(Vue, window[module], Store))
  new Vue({
    el: '#WgView',
    store: new Vuex.Store(Store),
  });
});