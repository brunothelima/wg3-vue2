// Vue instance and Vue plugins imports
import Vue from 'vue/dist/vue.min.js'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n/dist/vue-i18n.min.js'
import VueLocalStorage from 'vue-localstorage'
// Wg core functions imports
import { installModule } from './wg.js'
import { GET } from './lib/api.js';
// Modules extentions 
const store = { modules: {} }
const i18n = { locale: 'pt', messages: {} }
// Installing Vue plugins to the Vue instance
Vue.use(Vuex);
Vue.use(VueI18n)
Vue.use(VueLocalStorage)
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