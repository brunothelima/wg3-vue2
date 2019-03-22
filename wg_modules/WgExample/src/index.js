import i18n from './i18n'
import store from './store'

import WgComponent from './components/WgComponent.vue'

export default {
	name: 'WgExample',
	i18n: i18n,
	store: store,
	components: {
		WgComponent,
	},
	install(Vue) {
		for (const component in this.components) {
			Vue.component(component, this.components[component]);
		}
	},
};
