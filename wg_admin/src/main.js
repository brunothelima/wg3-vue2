// Vue instance and Vue plugins imports
import Vue from 'vue'
import Vuex from 'vuex'
import VueI18n from 'vue-i18n'
import VueRouter from 'vue-router'
import VueLocalStorage from 'vue-localstorage'
// Modules extentions imports
import router from './router'
import store from './store'
import i18n from './i18n'
// Wg core functions imports
import { GET } from 'wg_core/api.js' 
import { importModules } from 'wg_core/wg.js'
// Root component to render the application
import App from './app.vue'
// Installing Vue plugins to the Vue instance
Vue.config.productionTip = true
Vue.use(Vuex)
Vue.use(VueI18n)
Vue.use(VueRouter)
Vue.use(VueLocalStorage)
/** 
 * WgAdmin async initialization
*/
GET('purchased_modules.php').then(modules => {
  importModules(Vue, modules, { store, router, i18n })
    .then(() => {
      new Vue({
        router: new VueRouter(router),
        i18n: new VueI18n(i18n),
        store: new Vuex.Store(store),
        render: html => html(App)
      }).$mount('#WgAdmin')
    })
})
