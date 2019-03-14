import Wg from 'wg_core/Wg.js'

export default Wg.extractLocaleMessages(require.context(
  './locales', 
  true, 
  /[A-Za-z0-9-_,\s]+\.json$/i
));
