var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './src/app.module.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
        }
      ]
    },
    stats: {
        colors: true
    },
    devtool: "#inline-source-map"
};