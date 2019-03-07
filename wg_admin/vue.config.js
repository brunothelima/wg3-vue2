const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: '@import "wg_utils/scss/index.scss";'
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_utils': path.resolve(__dirname, '../wg_utils'),
        'wg_vendors': path.resolve(__dirname, '../wg_vendors')
      }
    }
  }
}
