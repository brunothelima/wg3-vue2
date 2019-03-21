/**
 * This function imports the given modules via dynamic imports
 *  and then install then to a given Vue instance
 * 
 * @param {Object} Vue - Vue instance to attach the modules 
 * @param {Array}  modules - List of modules names to be imported
 * @param {Object} extentions - Global extentions to recieve the given modules own extentions
 */
export function importModules(Vue, modules, extentions) {
  return new Promise(async (resolve, reject) => {
    while (modules.length > 0) {
      // await import(/* webpackIgnore: true */`wg_modules/${modules.pop()}/src/index.js`).then(response => {
      await import(`wg_modules/${modules.pop()}/src/index.js`).then(response => {
        installModule(Vue, response.default, extentions)
      });
      if (!modules.length) {
        resolve()
      }
    }
  })
}
/**
 * This function install a given module into a given Vue instance
 *  and extends its global configurations
 * 
 * @param {Object} Vue - Vue instance to attatch the module
 * @param {Object} module - Module plugin object
 * @param {Object} extentions Global extentions to recieve the given module own extentions
 * @param {Object} extentions.store Global application vuex store
 * @param {Object} extentions.i18n Global application i18n config
 * @param {Object} extentions.router Global application router config
 */
export function installModule(Vue, module, { store, i18n, router }) {
  Vue.use(module)
  // Extending module store to the global store
  if (module.store && store) {
    store.modules[module.name] = module.store
  }
  // Extending i18n config to the global i18n config
  if (module.i18n && i18n) {
    for (const locale in module.i18n) {
      const translations = module.i18n[locale][module.name];
      i18n.messages[locale][module.name] = translations;
    }
  }
  // Extending module routes to the global router
  if (module.routes && router) {
    router.routes.push(module.routes)
  }
}
/**
 * This function creates a i18n configuration object 
 *  from a griven key to access the translations and locale .json files
 *  with all the translations to be accessed
 * 
 * @param {String} env - String key to access the translations vie $t() 
 * @param {Object} locales - Locale .json files 
 */
export function I18nFromLocales(env, locales) {
  const messages = {}
  for (const key of locales.keys()) {
    const match = key.match(/([A-Za-z0-9-_]+)\./i)
    if (match && match.length > 1) {
      const locale = match[1];
      messages[locale] = {
        ...messages[locale],
        [env]: locales(key),
      }
    }
  }
  return messages
}
/**
 * Default exports all the functions as an object methods
 */
export default {
  importModules,
  installModule,
  I18nFromLocales
}