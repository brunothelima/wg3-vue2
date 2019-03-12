import WgContainer from './WgContainer.vue'
import store from './store'

export default {
	name: 'WgFoundation',
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
