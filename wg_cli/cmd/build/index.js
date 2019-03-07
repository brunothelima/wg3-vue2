const webpack = require("webpack");
const fs = require('fs');
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const paths   = require('./../../config/paths')
const helpers = require(`${paths.LIB}/helpers`);

/**
 * Build all wg_modules as separated bundles on curr project
 *
 * This function make use of webpack to build a bundle
 * of every wg_module. The bundles will be available in
 * modules own folder inside the "dist" dir of the current project.
 *
 * Usage:
 * $ wg build {options}
 */
module.exports = (context) => {

  let __wgpath = process.cwd();

  // define the webpack defaults for wg

  const defaults = {
    mode: 'production',
    plugins: [],
    resolveLoader: {
      modules: [path.resolve(__basedir, 'node_modules')]
    },    
    resolve: {
      alias: {
        'wg_modules': path.resolve(__wgpath, './wg_modules'),
        'wg_utils': path.resolve(__wgpath, './wg_utils'),
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

  // run webpack over each wg module

  fs.readdir(`${__wgpath}/wg_modules/`, (err, ls) => { 
    let wgModules = ls.filter(dir => fs.lstatSync(`${__wgpath}/wg_modules/${dir}`).isDirectory());
    for(const wgModule of wgModules) {
      webpack({
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
      }).run((err,stats) => {
        console.log(stats.toString());
      });
    }
  });
}