import { installModule, store } from './wg_utils/mixins/WgInit.js'

fetch('http://localhost/widgrid/modules.php')
  .then(response => response.json())
  .then(modules => {
    modules.map(module => installModule(Vue, window[module], store))
    new Vue({
      el: '#WG3',
      store: new Vuex.Store(store),
    });
  })
  