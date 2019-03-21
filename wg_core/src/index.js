import Vue from 'vue/dist/vue.min.js'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n/dist/vue-i18n.min.js'
import VueLocalStorage from 'vue-localstorage'

import { installModule } from './wg.js'
import { GET } from './api.js';

Vue.use(Vuex);
Vue.use(VueI18n)
Vue.use(VueLocalStorage)

const store = { modules: {} }
const i18n = { locale: 'pt', messages: {} }

/**
 * Widgrid runtime initialization
 */
GET('purchase_modules.php').then(modules => {
  modules.map(module => installModule(Vue, window[module], { store, i18n }))
  new Vue({
    el: '#WgView',
    i18n: new VueI18n(i18n),
    store: new Vuex.Store(store),
  });
});