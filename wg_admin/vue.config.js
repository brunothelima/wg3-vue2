const path = require('path')

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "wg_core/scss/index.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_core': path.resolve(__dirname, '../wg_core/src'),
        'wg_vendors': path.resolve(__dirname, '../wg_vendors')
      }
    }
  }
}
