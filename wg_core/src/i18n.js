import { createLocaleEnv } from 'wg_core/Wg.js'

const messages = createLocaleEnv(
  'WgCore',
  require.context(
    'wg_core/locales', 
    true, 
    /[A-Za-z0-9-_,\s]+\.json$/i
  )
)

export default {
  locale: 'pt',
  fallbackLocale: 'pt',
  messages: messages
}