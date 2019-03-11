import WG3 from './widgrid.js'
import store from './stores/main.js'

WG3.getPurchasedModules().then(modules => {
  modules.map(module => WG3.installModule(Vue, window[module], store))
  new Vue({
    el: '#WG3',
    store: new Vuex.Store(store),
  });
});