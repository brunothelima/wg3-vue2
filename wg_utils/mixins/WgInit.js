export function installModule (Vue, module, store = {}) {
  Vue.use(module)
  if (module.store) {
    store['modules'][module.name] = module.store
	}
}

export function importModules (Vue, modules, store = {}) {
	return new Promise(async (resolve, reject) => {
		while (modules.length > 0) {
			await import(`wg_modules/${modules.pop()}/src/index.js`)
			.then(response => {
				installModule(Vue, response.default, store)
          if (!modules.length) {
            resolve(modules)
          }
        })
    }
  })
}

export default {
  installModule,
  importModules
}
