// Plugin Components
import WgContainer from './WgContainer.vue'
import WgHeading from './WgHeading.vue'
import WgButton from './WgButton.vue'

export default {
	components: [
		WgContainer,
		WgHeading,
		WgButton,
	],
  install(Vue) {
		for(const component of this.components.values()) {
			Vue.component(component.name, component);
		}
	},
};