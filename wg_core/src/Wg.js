export async function getPurchasedModules() {
  return await fetch('http://localhost/widgrid/wg_api/modules.php')
    .then(response => response.json());
}

export function importModules(Vue, modules, store, i18n) {
  return new Promise(async (resolve, reject) => {
    while (modules.length > 0) {
      // await import(/* webpackIgnore: true */`wg_modules/${modules.pop()}/src/index.js`)
      await import(`wg_modules/${modules.pop()}/src/index.js`)
        .then(response => {
          installModule(Vue, response.default, store, i18n)
        });
      if (!modules.length) {
        resolve()
      }
    }
  })
}

export function installModule(Vue, module, store, i18n) {
  Vue.use(module)
  if (module.store) {
    installStore(module, store);
  }
  if (module.i18n) {
    installI18n(module, i18n);
  }
}

function installStore(module, store) {
  store.modules[module.name] = module.store
}

function installI18n(module, i18n) {
  for (const locale in module.i18n) {
    const translations = module.i18n[locale][module.name];
    i18n.messages[locale][module.name] = translations;
  }
}

export function createLocaleEnv(env, locales) {
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

export default {
  getPurchasedModules,
  importModules,
  installModule,
  createLocaleEnv
}