/*
    We both know that this configuration is way overkill for a simple portfolio site. 
    - _"Your site would be so much smaller/faster/simpler if you just wrote it in HTML/CSS/JS"_
    - I know... but the purpose of this is really to kick the tires on what my brain has actually accumulated.
        Plus I get to try out new stuff so shove it.
*/

const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin') // generates the HTML file for the app
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin') // Experimental -- 1/16/2021 This may need to be replaced
const ForkTSCheckerPlugin = require('fork-ts-checker-webpack-plugin') // Forks type checking etc to speed up build

module.exports = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: 'client.js'
	},
	watch: true,
	mode: 'development',
	devServer: {
		port: 8083,
		compress: true,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.ts(x)$/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							plugins: ['react-refresh/babel']
						}
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new ReactRefreshPlugin(),
		new ForkTSCheckerPlugin(),
		new HTMLWebpackPlugin({
			filename: './index.html'
		})
	]
}
