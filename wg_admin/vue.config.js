const path = require('path')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: '@import "wg_core/scss/main.scss";'
      },
      postcss: {
        config: {
          path: path.resolve(__dirname, './')
        }
      },
    }
  },
  configureWebpack: {
    optimization: {
      minimizer: [new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false,
          },
        }
      })],
    },
    resolve: {
      alias: {
        'wg_modules': path.resolve(__dirname, '../wg_modules'),
        'wg_core': path.resolve(__dirname, '../wg_core/src'),
        'wg_vendors': path.resolve(__dirname, '../wg_vendors')
      }
    }
  }
}
