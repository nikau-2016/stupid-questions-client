const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, 'src', 'public'),
    file: 'bundle.js'
  },
  module: {
    loaders: [
      {loader: 'babel-loader?cacheDirectory', test: /\.jsx?$/, exclude: /node_modules/}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
