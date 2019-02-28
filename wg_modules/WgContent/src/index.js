import WgHero from './WgHero.vue'
import Store from './store'

export const WgContent = {
	name: 'WgContent',
	store: Store,
	components: {
		WgHero,
	},
	register(components={}) {
		for(const component of Object.keys(components).values()) {
			Vue.component(component, components[component]);
			this.register(components[component].components);
		}
	},
	install(Vue) {
		this.register(this.components);
	}
};