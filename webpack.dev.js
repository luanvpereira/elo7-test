var path = require('path');

var WebpackNotifierPlugin = require('webpack-notifier');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var BUILD_DIR  = path.resolve(__dirname, '.tmp');
var APP_DIR    = path.resolve(__dirname, 'app');

module.exports = {
  context: APP_DIR,

  entry: {
    html: APP_DIR + '/index.html',
    bundle: './scripts/index.js'
  },

  output: {
    path: BUILD_DIR,
    // publicPath: 'http://127.0.0.1:8080',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['', '.html', '.js', '.json', '.scss', '.css']
  },

  module: {
    loaders: [
      {
        test: /\.s?[ca]ss$/i,
        loader: ExtractTextPlugin.extract([
         'css',
         'sass'
        ])
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loaders: [
          'file?name=assets/[name].[ext]',
        ]
      },
      {
        test: /\.html$/,
        loaders: [
          'file?name=[name].[ext]',
          'extract',
          'html'
        ]
      }
    ]
  },
  plugins: [
    new WebpackNotifierPlugin(),
    new ExtractTextPlugin('style.css'),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
}
