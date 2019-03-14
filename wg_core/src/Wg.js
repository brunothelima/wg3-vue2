/**
 * This class handles the loading and installation of WgModules
 */
export default class {
  /**
   * Fetches the users default and purchased modules list
   * 
   * @returns {Promise} 
   */
  static async getPurchasedModules() {
    return await fetch('http://localhost/widgrid/wg_api/modules.php')
      .then(response => response.json());
  }
  /**
   * Dynamicly import/install modules 
   * 
   * @param {Object} Vue - Vue instance to install the modules
   * @param {Array} modules - Array of modules to import
   * @param {Object} store - Store to merge the modules own stores
   * @returns {Promise} 
   */
  static importModules(Vue, modules, store = {}) {
    return new Promise(async (resolve, reject) => {
      while (modules.length > 0) {
        await import(`wg_modules/${modules.pop()}/src/index.js`).then(response => {
            this.installModule(Vue, response.default, store)
        });
        if (!modules.length) {
          resolve()
        }
      }
    })
  }
  /**
   * Install the module in to the given Vue instance
   * 
   * @param {Object} Vue - Vue instance to install the module
   * @param {Array} module - Module plugin to be installed 
   * @param {Object} store - Store to merge the module own stores 
   */
  static installModule(Vue, module, store = {}) {
    Vue.use(module)
    if (module.store) {
      store.modules[module.name] = module.store
    }
  }
  /**
   * Merge the given stores into one 
   * 
   * @param {Array} stores - List of stores passed as argument 
   */
  static mergeStores(...stores) {
    const merge = {};
    for(const store of stores.values()) {
      for(const prop in store) {
        merge[prop] = {
          ...merge[prop],
          ...store[prop],
        }
      }
    }
    return merge;
  }
}
