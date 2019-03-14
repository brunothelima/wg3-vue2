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
  static importModules(Vue, modules, store = {}, locale = {}) {
    return new Promise(async (resolve, reject) => {
      while (modules.length > 0) {
        await import(`wg_modules/${modules.pop()}/src/index.js`).then(response => {
            this.installModule(Vue, response.default, store, locale)
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
  static installModule(Vue, module, store = {}, locale = {}) {
    Vue.use(module)
    if (module.store) {
      store.modules[module.name] = module.store
    }
    if (module.locale) {
      for (const lng in module.locale) {
        locale.messages[lng] = { 
          ...locales.messages[lng], 
          ...module.locale[lng]
        }
      }
    }
  }
  static extractLocaleMessages (locales={}) {
    const messages = {}
    locales.keys().forEach(key => {
      const matched = key.match(/([A-Za-z0-9-_]+)\./i)
      if (matched && matched.length > 1) {
        const locale = matched[1]
        messages[locale] = locales(key)
      }
    })
    return messages
  }
}