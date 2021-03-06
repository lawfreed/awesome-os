const path = require('path');
module.exports = {
  mode: 'development',
  entry: './assets/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/dist/js')
  },
  module: {
    rules: [{
      test: /.js?$/,
      // include: [
      //   path.resolve(__dirname, 'app')
      // ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  }
};