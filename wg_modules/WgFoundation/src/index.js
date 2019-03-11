import WgContainer from './WgContainer.vue'
import WgHeading from './WgHeading.vue'
import WgButton from './WgButton.vue'
import store from './store'
import Wg from 'wg_core/wg.js';

export default {
	name: 'WgFoundation',
	store: store,
	install(Vue) {
		Wg.installComponents(Vue, {
			WgContainer,
			WgHeading,
			WgButton,
		});
	},
};
