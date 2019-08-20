const path = require('path');
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.ts'
  },
  output: {
    path: path.join(process.cwd(), 'dist'),
    filename: './[name].js',
    library: 'library',
    libraryTarget: 'umd'
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/,
    }]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
};