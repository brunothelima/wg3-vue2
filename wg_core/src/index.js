import Vue from 'vue/dist/vue.min.js'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n/dist/vue-i18n.min.js'
import VueLocalStorage from 'vue-localstorage'

import i18n from './i18n.js'
import store from './store/index.js'
import { getPurchasedModules, installModule } from './Wg.js'

Vue.use(Vuex);
Vue.use(VueI18n)
Vue.use(VueLocalStorage)

/**
 * Widgrid runtime initialization
 */
getPurchasedModules().then(modules => {
  modules.map(module => installModule(Vue, window[module], { store, i18n }))
  new Vue({
    el: '#WgView',
    i18n: new VueI18n(i18n),
    store: new Vuex.Store(store),
  });
});