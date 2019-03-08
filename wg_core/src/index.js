export async function getPurchasedModules () {
  const url = 'http://localhost/exp/widgrid/modules.php';
  const modules = await fetch(url).then(resp => resp.json());
  return modules;
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

export function installModule (Vue, module, store = {}) {
  Vue.use(module)
  if (module.store) {
    store['modules'][module.name] = module.store
	}
}

export function registerModule(Vue, components={}) {
  for(const component of Object.keys(components).values()) {
    Vue.component(component, components[component]);
    registerModule(Vue, components[component].components);
  }
}

export default {
  getPurchasedModules, 
  importModules,
  installModule,
  registerModule,
}
