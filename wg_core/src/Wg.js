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
        await import(/* webpackIgnore: true */
          `wg_modules/${modules.pop()}/src/index.js`)
          .then(response => {
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
  static installModule(Vue, module, store = {}, i18n = {}) {
    Vue.use(module)
    this.extendStoreFromModule(store, module);
    this.extendI18nFromModule(i18n, module);
  }
  static extendStoreFromModule(store, module) {
    if (module.store) {
      store.modules[module.name] = module.store
    }
  }
  static extendI18nFromModule(i18n, module) {
    if (module.i18n) {
      for (const lang in module.i18n) {
        i18n.messages[lang][module.name] = module.i18n[lang]
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