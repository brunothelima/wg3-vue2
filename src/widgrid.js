export default class {
  constructor(el="#widgrid") {
    this.el = el;
    this.modules = [];
    this.stores = [];
    return this.build();
  }
  async build() {
    const url = './src/config.json';
    this.modules = await fetch(url).then(res => res.json());
    for(const module of this.modules.values()) {
      Vue.use(window[module]);
      if(!!window[module].store) {
        this.stores[module] = window[module].store;
      }
    }
    return new Vue({
      el: this.el,
      store: new Vuex.Store({
        modules: this.stores
      }),
    })
  }
}