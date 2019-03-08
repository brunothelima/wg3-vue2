import { installModule } from './wg_utils/mixins/init.js'
import Store from './wg_utils/store.js'


fetch('http://localhost/widgrid/modules.php')
.then(response => response.json())
.then(modules => {
    modules.map(module => installModule(Vue, window[module], Store))
    new Vue({
      el: '#WG3',
      store: new Vuex.Store(Store),
    });
  });
  