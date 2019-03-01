export default class {
  constructor(el = "#widgrid") {
    this.$el = el;
    this.$vue = {};
    this._modules = [];
    this._stores = [];
    this.init();
  }
  get url() {
    const base = document.getElementsByTagName('base')[0];
    return base.href + 'modules.json';
  }
  async loadModules() {
    this._modules = await fetch(this.url).then(res => res.json());
    for (const module of this._modules.values()) {
      Vue.use(window[module]);
      if (!!window[module].store) {
        this._stores[module] = window[module].store;
      }
    }
  }
  async init() {
    await this.loadModules();
    this.$vue = new Vue({
      el: this.$el,
      store: new Vuex.Store({
        modules: this._stores
      }),
    });
  }
}