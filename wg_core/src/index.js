import Wg from './Wg.js'
import store from './store/index.js'

Wg.getPurchasedModules().then(modules => {
  modules.map(module => Wg.installModule(Vue, window[module], store))
  new Vue({
    el: '#WG3',
    store: new Vuex.Store(store),
  });
});