import WgHero from './WgHero.vue'
import Store from './store'

export const WgContent = {	
	store: Store,
	components: {
		WgHero,
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