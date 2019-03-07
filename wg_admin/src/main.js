import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)
Vue.config.productionTip = false

const modules = [];
const stores = {};

async function loadModule (moduleName = '') {
  return await import(`wg_modules/${moduleName}/src/index.js`)
    .then(response => {
      const module = response[moduleName];
      Vue.use(module)
      if (module.store) {
        this._stores[moduleName] = module.store
      }
    })
}

export class WgAdmin {
  constructor () {
    this._modules = []
    this._stores = {}
    this.init();
  }
  get _url() {
    return 'http://localhost/exp/widgrid/modules.php'
  }
  async loadModule (moduleName = '') {
    return await import(`wg_modules/${moduleName}/src/index.js`)
      .then(importedModule => {
       this.installModule(importedModule[moduleName]);
      });
  }
  installModule(module) {
    Vue.use(module)
    if (module.store) {
      this._stores[module.name] = module
    }
  }
  mount() {
    new Vue({
      render: h => h(App),
      store: new Vuex.Store({
        modules: this._stores
      })
    }).$mount('#app')
  }
  init () {
    fetch(this._url)
      .then(r => r.json())
      .then(wgModules => {
        wgModules.map(async (name, i) => {
          await this.loadModule(name)
          if (i === wgModules.length - 1) 
            this.mount();
        })
      })
  }
}

const widgrid = new WgAdmin();