import i18n from './i18n'
import store from './store'

import WgContainer from './components/WgContainer.vue'
import WgButton from './components/WgButton'
import WgImg from './components/WgImg'
import WgIcon from './components/WgIcon'

import WgForm from './components/WgForm'

export default {
	name: 'WgFoundation',
	i18n: i18n,
	store: store,
	install(Vue) {
		Vue.component(WgContainer.name, WgContainer);
		Vue.component(WgButton.name, WgButton);
		Vue.component(WgImg.name, WgImg);
		Vue.component(WgIcon.name, WgIcon);
		Vue.component(WgForm.name, WgForm);
	},
};
