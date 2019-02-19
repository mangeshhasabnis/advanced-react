const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './lib/components/Index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.txt$/, use: 'raw-loader' },
      { test: /\.(js|jsx)$/,exclude: /node_modules/ , use: 'babel-loader' }
    ]
  }
};