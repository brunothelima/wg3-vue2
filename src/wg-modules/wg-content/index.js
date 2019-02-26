// Plugin Components
import WgHero from './WgHero.vue'

export default {
	components: {
		WgHero,
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