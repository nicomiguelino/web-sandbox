const path = require('path');

module.exports = {
  entry: './src/index.js',
  mode: 'production',
  optimization: {
    minimize: true
  },
  output: {
    filename: 'node-qrcode.min.js',
    path: path.resolve(__dirname, 'dist'),
  }
};
