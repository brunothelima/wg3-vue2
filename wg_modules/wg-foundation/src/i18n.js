import { I18nFromLocales } from 'wg_core/wg.js'

const i18n =  I18nFromLocales(
  'WgFoundation',
  require.context(
    './locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
);

export default i18n 