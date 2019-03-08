import WG3 from './widgrid.js'

import store from './widgrid.js'

WG3.getPurchasedModules().then(modules => {
  modules.map(module => installModule(Vue, window[module], store))
  new Vue({
    el: '#WG3',
    store: new Vuex.Store(store),
  });
});