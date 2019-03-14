import Wg from 'wg_core/Wg.js'
import WgCoreI18n from 'wg_core/i18n.js'

const messages = Wg.extractLocaleMessages(require.context(
  'wg_admin/locales', 
  true, 
  /[A-Za-z0-9-_,\s]+\.json$/i
));

for(const lang in messages) {
  messages[lang] = {
    WgAdmin: messages[lang],
    WgCore: WgCoreI18n.messages[lang]
  }
}
export default {
  locale: 'en',
  fallbackLocale: 'en',
  silentTranslationWarn: true,
  messages: messages
}
