export default class {
  constructor(el = "#widgrid") {
    this.$el = el;
    this._modules = [];
    this._stores = [];
    this.init();
  }
  async init() {
    const url = document.getElementsByTagName('base')[0].href + 'modules.php';
    this._modules = await fetch(url).then(res => res.json());
    for (const module of this._modules.values()) {
      Vue.use(window[module]);
      if (!!window[module].store) {
        this._stores[module] = window[module].store;
      }
    }
    this.mount();
  }
  mount() {
    new Vue({
      store: new Vuex.Store({
        modules: this._stores
      })
    }).$mount('#app')
  }
}