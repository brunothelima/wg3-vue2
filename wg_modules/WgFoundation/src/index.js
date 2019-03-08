import WgContainer from './WgContainer.vue'
import WgHeading from './WgHeading.vue'
import WgButton from './WgButton.vue'
import Store from './store'

export default {
	name: 'WgFoundation',
	store: Store,
	components: {
		WgContainer,
		WgHeading,
		WgButton,
	},
	register(Vue, components={}) {
		for(const component of Object.keys(components).values()) {
			Vue.component(component, components[component]);
			this.register(Vue, components[component].components);
		}
	},
	install(Vue) {
		this.register(Vue, this.components);
	},
};