// Vue instance and Vue plugins imports
import Vue from 'vue'
// Modules extentions imports
import router from './router.js'
import store from './store'
import locales from './locales'
// Root component to render the application
import App from './app.vue'
// Installing Vue plugins to the Vue instance
Vue.config.productionTip = true

new Vue({
  router: router,
  store: store,
  i18n: locales,
  render: html => html(App)
}).$mount('#WgAdmin')
