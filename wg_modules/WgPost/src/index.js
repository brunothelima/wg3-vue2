import i18n from './i18n'
import store from './store'
import routes from './routes'

import WgPostList from './WgPostList.vue'

export default {
	name: 'WgPost',
	i18n: i18n,
	store: store,
	routes: routes,
	components: {
		WgPostList,
	},
	install(Vue) {
		for (const component in this.components) {
			Vue.component(component, this.components[component]);
		}
	},
};
