import Vue from 'vue/dist/vue.js'
import store from './store/index.js'
import Wg from './Wg.js'



/**
 * Widgrid runtime initialization
 */
Wg.getPurchasedModules().then(modules => {
  modules.map(module => Wg.installModule(Vue, window[module], store))
  new Vue({
    el: '#WgView',
    store: new Vuex.Store(store),
  });
});