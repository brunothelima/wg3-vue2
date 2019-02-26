const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const filename = 'widgrid';
const envMode = 'production';
const path = require('path');

module.exports = {
	mode: envMode,
	entry: `./src/${filename}.js`,
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: `${filename}.min.js`,
	},
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			path: path.resolve(__dirname, 'dist'),
			filename: `${filename}.min.css`,
		}),
	],
	module: {
		rules: [
			{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					MiniCssExtractPlugin.loader,
					{ 
						loader: 'css-loader', 
						options: { 
							sourceMap: true, 
							importLoaders: 1 
						}
					},
					{ 
						loader: 'sass-loader', 
						options: { 
							sourceMap: true,
							data: `@import "src/wg-scss/index.scss";`,
						} 
					},
				],
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: [
					'babel-loader',
				],
			},
		],
	}
};