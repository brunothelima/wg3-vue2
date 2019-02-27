const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const mode = 'development';
const fs = require('fs');
const path = require('path');

const VueRules = {
	test: /\.vue$/,
	loader: 'vue-loader'
};
const JSRules = {
	test: /\.js$/,
	exclude: /(node_modules|bower_components)/,
	loader: 'babel-loader',
};
const CSSRules = {
	test: /\.scss$/,
	use: [
		MiniCssExtractPlugin.loader,
		{ loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 }},
		{ 
			loader: 'sass-loader', 
			options: { 
				sourceMap: true,
				data: `@import "./src/WgFoundation/assets/scss/index.scss";`,
			} 
		},
	],
};

const defaultConfig = {
	mode: mode,
	plugins: [
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			path: path.resolve(__dirname, 'dist'),
			filename: `[name].min.css`,
		}),
	],
	module: {
		rules: [
			JSRules,
			VueRules,
			CSSRules,
		],
	}
}

module.exports = new Promise((resolve, reject) => {
	fs.readdir('./src/', (err, srcPaths) => { 
		const modules = srcPaths.filter(srcPath => fs.lstatSync(`./src/${srcPath}`).isDirectory());
		const rules = modules.map(moduleName => {
			return {
				name: moduleName,
				entry: `./src/${moduleName}/index.js`,
				output: {
					path: path.resolve(__dirname, `src/${moduleName}/dist`),
					filename: `[name].min.js`,
					library: moduleName,
					libraryTarget: 'var',
					libraryExport: moduleName,
				},
				...defaultConfig,
			};
		});
		resolve(rules);
	});
});