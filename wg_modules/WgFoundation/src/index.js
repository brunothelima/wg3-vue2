import WgContainer from './WgContainer.vue'
import i18n from './i18n'
import store from './store'

export default {
	name: 'WgFoundation',
	i18n: i18n,
	store: store,
	components: {
		WgContainer,
	},
	install(Vue) {
		for (const component in this.components) {
			Vue.component(component, this.components[component]);
		}
	},
};
