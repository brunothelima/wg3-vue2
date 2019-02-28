const fs = require('fs');
const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const defaults = {
	mode: 'production',
	plugins: [],
	module: {
		rules: []
	}
};

defaults.plugins.push(new VueLoaderPlugin());
defaults.plugins.push(new MiniCssExtractPlugin({
	path: path.resolve(__dirname, 'dist'),
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
				data: `@import "./src/WgFoundation/assets/scss/index.scss";` 
			} 
		}
	]
});

module.exports = new Promise((resolve, reject) => {
	fs.readdir('./src/', (err, ls) => { 
		const wgModules = ls.filter(dir => fs.lstatSync(`./src/${dir}`).isDirectory());
		resolve(wgModules.map(wgModule => {
			return {
				name: wgModule,
				entry: `./src/${wgModule}/index.js`,
				output: {
					path: path.resolve(__dirname, `src/${wgModule}/dist`),
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