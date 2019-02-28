// Plugin Components
import WgContainer from './WgContainer.vue'
import WgHeading from './WgHeading.vue'
import WgButton from './WgButton.vue'
import Store from './store'

export const WgFoundation = {
	name: 'WgFoundation',
	store: Store,
	components: {
		WgContainer,
		WgHeading,
		WgButton,
	},
  install(Vue) {
		this.register(this.components);
	},
	register(components={}) {
		for(const component of Object.keys(components).values()) {
			Vue.component(component, components[component]);
			this.register(components[component].components);
		}
	}
};