/* eslint-disable no-undef*/
var webpack = require('webpack');

module.exports = {
	entry: ['./src/index.js'],
	output: {
		path: __dirname,
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					plugins: ['transform-decorators-legacy', 'transform-class-properties' ],
					presets: ['react', 'es2015', 'stage-1']
				}
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		historyApiFallback: true,
		contentBase: './'
	},
  plugins: [
      new webpack.DefinePlugin({
          'process.env.FIREBASE_APIKEY': JSON.stringify(process.env.FIREBASE_APIKEY),
          'process.env.FIREBASE_AUTHDOMAIN': JSON.stringify(process.env.FIREBASE_AUTHDOMAIN),
          'process.env.FIREBASE_DBURL': JSON.stringify(process.env.FIREBASE_DBURL),
          'process.env.FIREBASE_PROJECTID': JSON.stringify(process.env.FIREBASE_PROJECTID),
          'process.env.FIREBASE_BUCKET': JSON.stringify(process.env.FIREBASE_BUCKET),
          'process.env.FIREBASE_SENDERID': JSON.stringify(process.env.FIREBASE_SENDERID),
      })
  ]
};
