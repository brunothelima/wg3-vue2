export default class {
  constructor(el = "#widgrid") {
    this.el = el;
    this.vue = {};
    this.modules = [];
    this.stores = [];
    this.init();
  }
  async init() {
    const url = `http://${window.location.hostname}/exp/widgrid/modules.json`;
    this.modules = await fetch(url).then(res => res.json());
    for (const module of this.modules.values()) {
      Vue.use(window[module]);
      if (!!window[module].store) {
        this.stores[module] = window[module].store;
      }
    }
    this.vue = new Vue({
      el: this.el,
      store: new Vuex.Store({
        modules: this.stores
      }),
    });
  }
}