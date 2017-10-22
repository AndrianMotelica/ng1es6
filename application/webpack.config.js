var path = require('path');

module.exports = {
    entry: './src/app.module.js',
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'main.bundle.js'
    },
    module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
          { test: /\.html$/, loader: 'html-loader' },
      ]
    },
    stats: {
        colors: true
    },
    devtool: "#inline-source-map"
};