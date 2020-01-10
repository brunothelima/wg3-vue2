const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/scss/_mixins.scss"; 
          @import "@/assets/scss/_vars.scss";
        ` 
      },
      postcss: { config: { path: path.resolve(__dirname) }      
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt',
      fallbackLocale: 'pt',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
