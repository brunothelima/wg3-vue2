// Vue instance and Vue plugins imports
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default new VueI18n({
  silentTranslationWarn: true,
  messages: {},
  locale: 'pt'
})
