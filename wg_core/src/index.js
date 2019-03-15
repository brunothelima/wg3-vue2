import Vue from 'vue/dist/vue.min.js'
import VueI18n from 'vue-i18n/dist/vue-i18n.min.js'
import Vuex from 'vuex'

import i18n from './i18n.js'
import store from './store/index.js'
import { getPurchasedModules, installModule } from './Wg.js'

Vue.use(VueI18n)
Vue.use(Vuex);

/**
 * Widgrid runtime initialization
 */
getPurchasedModules().then(modules => {
  modules.map(module => installModule(Vue, window[module], store, i18n))
  new Vue({
    el: '#WgView',
    i18n: new VueI18n(i18n),
    store: new Vuex.Store(store),
  });
});