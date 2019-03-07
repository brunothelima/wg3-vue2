const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

/**
 * COLLECTING PATHS
 * Defining the workdir with process.argv[2] option
 *
 * Any process which calls this script can pass a {path} as 3nd
 * argument on "npm run build {path}" using this script. This 
 * {path} must be and absolute path to override webpack defaults. 
 * When passed, the webpack will point its input and output paths 
 * to be relative to this {path}, if not passed, __dirname will be used.
 */

let __wgpath = __dirname;

if(process.argv[2]){
  __wgpath = process.argv[2];
}

console.log(`>>>>>>>>>>>>>>>>>>>>>>>>>>> ${__wgpath}`);

// ------------------------------------------------------ //

const defaults = {
  mode: 'production',
  plugins: [],
  resolve: {
    alias: {
      'wg_modules': path.resolve(__wgpath, '/wg_modules'),
      'wg_utils': path.resolve(__wgpath, '/wg_utils'),
    }
  },
  module: {
    rules: []
  }
};

defaults.plugins.push(new VueLoaderPlugin());

defaults.plugins.push(new MiniCssExtractPlugin({
  path: path.resolve(__wgpath, 'dist'),
  filename: `[name].min.css`,
}));

defaults.module.rules.push({
  test: /\.vue$/,
  loader: 'vue-loader'
});

defaults.module.rules.push({
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel-loader'
});

defaults.module.rules.push({
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    'css-loader',
    { 
      loader: 'sass-loader', 
      options: { 
        data: `@import "wg_utils/scss/index.scss";` 
      } 
    }
  ]
});

module.exports = new Promise((resolve, reject) => {
  fs.readdir(`${__wgpath}/wg_modules/`, (err, ls) => { 
    const wgModules = ls.filter(dir => fs.lstatSync(`${__wgpath}/wg_modules/${dir}`).isDirectory());
    resolve(wgModules.map(wgModule => {
      return {
        name: wgModule,
        entry: path.resolve(__wgpath, `wg_modules/${wgModule}/src/index.js`),
        output: {
          path: path.resolve(__wgpath, `wg_modules/${wgModule}/dist`),
          filename: `[name].min.js`,
          library: wgModule,
          libraryExport: wgModule,
          libraryTarget: 'var',
        },
        ...defaults,
      };
    }));
  });
});