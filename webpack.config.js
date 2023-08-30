const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'aegis.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'Aegis',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  devServer: {
    
  }
};