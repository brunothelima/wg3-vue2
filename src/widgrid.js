import WgFoundation from  './wg-modules/wg-foundation';
import WgContent from  './wg-modules/wg-content';
import WgStore from  './wg-store';

Vue.use(WgFoundation);
Vue.use(WgContent);

const widgrid = new Vue({
  el: '#widgrid',
  store: WgStore,
});