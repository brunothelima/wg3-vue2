
/**
 * Fetches the users default and purchased modules list
 * 
 * @returns {Promise} 
 */
export async function getPurchasedModules() {
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
export function importModules(Vue, modules, store = {}, locale = {}) {
  return new Promise(async (resolve, reject) => {
    while (modules.length > 0) {
      // await import(/* webpackIgnore: true */
      // `wg_modules/${modules.pop()}/src/index.js`)
      await import(`wg_modules/${modules.pop()}/src/index.js`)
        .then(response => {
          installModule(Vue, response.default, store, locale)
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
export function installModule(Vue, module, store = {}, i18n = {}) {
  Vue.use(module)
  installStore(store, module);
  installI18n(i18n, module);
}

export function installStore(store, module) {
  if (module.store) {
    store.modules[module.name] = module.store
  }
}

export function installI18n(i18n, module) {
  if (module.i18n) {
    for (const lang in module.i18n) {
      i18n.messages[lang][module.name] = module.i18n[lang][module.name]
    }
  }
}

export function createLocaleEnv(env = '', locales = {}) {
  const messages = {}
  for (const key of locales.keys()) {
    const match = key.match(/([A-Za-z0-9-_]+)\./i)
    if (match && match.length > 1) {
      const locale = match[1]
      messages[locale] = { [env]: locales(key) } 
    }
  }
  return messages
}