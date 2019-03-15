import { createLocaleEnv } from 'wg_core/wg.js'
import WgCoreI18n from 'wg_core/i18n.js'

const messages = createLocaleEnv(
  'WgAdmin',
  require.context(
    'wg_admin/locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
)

for(const locale in messages) {
  messages[locale] = {
    WgAdmin: messages[locale]['WgAdmin'],
    WgCore: WgCoreI18n.messages[locale]['WgCore']
  }
}

export default {
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: messages,
  silentTranslationWarn: true
}
