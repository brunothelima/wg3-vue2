export default class { 
  get url() {
    return 'http://localhost/exp/widgrid/modules.php'
  }
  static async getPurchasedModules () {
    const modules = await fetch(this.url)
      .then(resp => resp.json());
    return modules;
  }
  static importModules (Vue, modules, store = {}) {
    return new Promise(async (resolve, reject) => {
      while (modules.length > 0) {
        await import(`wg_modules/${modules.pop()}/src/index.js`)
        .then(response => {
          this.installModule(Vue, response.default, store)
            if (!modules.length) {
              resolve(modules)
            }
          })
      }
    })
  }
  static installModule (Vue, module, store = {}) {
    Vue.use(module)
    if (module.store) {
      store['modules'][module.name] = module.store
    }
  }
}
