const path = require('path');

module.exports = {
  devtool: 'inline-source-map',
  entry: './src/index.js',
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components|dist)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'] // Transpiles ES6 to ES5
            }
          }
        ]
      }
    ]
  },
  optimization: {
    minimize: true
  },
  output: {
    filename: 'bundle.min.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
