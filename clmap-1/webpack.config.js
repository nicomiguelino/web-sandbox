const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    filename: 'country-locale-map.1.18.5.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
