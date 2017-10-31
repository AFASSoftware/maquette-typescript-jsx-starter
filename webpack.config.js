module.exports = {
  resolve: {
    extensions: ['', '.ts', '.tsx', '.webpack.js', '.web.js', '.js']
  },
  entry: './src/main.ts',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { 
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader',
      }
    ]
  }
};