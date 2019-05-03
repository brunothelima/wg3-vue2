const path = require('path')

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_core': path.resolve(__dirname, '../wg_core/src'),
        'wg_admin': path.resolve(__dirname, './src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "wg_core/assets/scss/_mixins.scss";
          @import "wg_core/assets/scss/_vars.scss";
        `},
        postcss: { config: { path: path.resolve(__dirname) } 
      },
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
