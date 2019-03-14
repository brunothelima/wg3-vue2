import Wg from 'wg_core/Wg.js'

const locales = require.context('wg_admin/locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)

export default {
  locale: 'pt',
  fallbackLocale: 'en',
  messages: Wg.extractLocaleMessages(locales)
}
