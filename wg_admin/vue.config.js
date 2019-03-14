const path = require('path')

console.log(process.argv);

module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_core': path.resolve(__dirname, '../wg_core/src'),
        'wg_vendors': path.resolve(__dirname, '../wg_vendors'),
        'wg_admin': path.resolve(__dirname, './src')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: { data: '@import "wg_core/scss/main.scss";' },
      postcss: { config: { path: path.resolve(__dirname) } },
    }
  },
  pluginOptions: {
    i18n: {
      locale: 'pt',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
}
