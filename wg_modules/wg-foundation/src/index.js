import i18n from './i18n'
import store from './store'

import WgContainer from './components/WgContainer.vue'
import WgButton from './components/WgButton'
import WgImg from './components/WgImg'

import WgForm from './components/WgForm'
import InputField from './components/WgForm/InputField'
import InputText from './components/WgForm/InputText'

export default {
	name: 'WgFoundation',
	i18n: i18n,
	store: store,
	install(Vue) {
		Vue.component(WgContainer.name, WgContainer);
		Vue.component(WgButton.name, WgButton);
		Vue.component(WgImg.name, WgImg);

		Vue.component(WgForm.name, WgForm);
		Vue.component(InputField.name, InputField);
		Vue.component(InputText.name, InputText);
	},
};
