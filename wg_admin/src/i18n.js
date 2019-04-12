import { I18nFromLocales } from 'wg_core/wg.js'

const i18n = I18nFromLocales(
  'WgAdmin',
  require.context(
    'wg_admin/locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
)

export default {
  locale: 'pt',
  messages: i18n,
  silentTranslationWarn: true
}
