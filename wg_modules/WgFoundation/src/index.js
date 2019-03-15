import i18n from './i18n'
import store from './store'

import WgContainer from './WgContainer.vue'
import WgI18nSelector from './WgI18nSelector.vue'

export default {
	name: 'WgFoundation',
	i18n: i18n,
	store: store,
	components: {
		WgContainer,
		WgI18nSelector,
	},
	install(Vue) {
		for (const component in this.components) {
			Vue.component(component, this.components[component]);
		}
	},
};
