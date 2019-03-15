import { createLocaleEnv } from 'wg_core/Wg.js'
import WgCoreI18n from 'wg_core/i18n.js'

const messages = createLocaleEnv(
  'WgAdmin',
  require.context(
    'wg_admin/locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
)

for(const lang in messages) {
  messages[lang] = {
    WgAdmin: messages[lang]['WgAdmin'],
    WgCore: WgCoreI18n.messages[lang]['WgCore']
  }
}

export default {
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: messages,
  silentTranslationWarn: true
}
