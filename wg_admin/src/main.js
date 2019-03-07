import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

class WgAdmin {
  constructor () {
    this._modules = []
    this._stores = {}
    this.init()
  }
  async loadModule (moduleName = '') {
    const response = await import(`wg_modules/${moduleName}/src/index.js`)
    const module = response[moduleName]
    Vue.use(module)
    if (module.store) {
      this._stores[moduleName] = module.store
    }
    return module
  }
  async init () {
    const url = 'http://localhost/widgrid/modules.php'
    this._modules = await fetch(url).then(resp => resp.json())
    for (const [i, module] of this._modules.entries()) {
      await this.loadModule(module)
      if (i === (this._modules.length - 1)) {
        this.mount()
      }
    }
  }
  mount () {
    new Vue({
      render: h => h(App),
      store: new Vuex.Store({
        modules: this._stores
      })
    }).$mount('#app')
  }
}

const admin = new WgAdmin()
