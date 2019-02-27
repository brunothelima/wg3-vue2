export default async function (el='#widgrid') {
  const modules = await fetch('./src/config.json')
    .then(resp => resp.json());
  const storeModules = {};
  for(const moduleName of modules.values()) {
    const module = window[moduleName];
    if (!!module.store) {
      storeModules[module.name] = module.store;
    }
    Vue.use(module);
  }
  return new Vue({
    el: el,
    store: new Vuex.Store({
      modules: storeModules,
    }),
  });
}