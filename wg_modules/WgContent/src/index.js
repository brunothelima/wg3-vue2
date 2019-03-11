import WgHero from './WgHero.vue'
import store from './store'
import Wg from 'wg_core/wg.js';

export default {
	name: 'WgContent',
	store: store,
	install(Vue) {
		Wg.installComponents(Vue, {
			WgHero
		});
	},
};
