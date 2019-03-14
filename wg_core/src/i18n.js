import Wg from 'wg_core/Wg.js'

const messages = Wg.extractLocaleMessages(require.context(
  'wg_core/locales', 
  true, 
  /[A-Za-z0-9-_,\s]+\.json$/i
));

for(const lang in messages) {
  messages[lang] = {
    WgCore: messages[lang]
  }
}

export default {
  locale: 'pt',
  fallbackLocale: 'en',
  messages: messages
}
