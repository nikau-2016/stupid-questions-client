module.exports = {
  entry: './src/index.js',
  output: 'bundle.js',
  module: {
    loaders: [
      {loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules'}
    ]
  },
  resolve: {
    exstensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
