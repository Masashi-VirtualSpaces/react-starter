const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: [
    './client.js',
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: "client.min.js",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'babel-loader',
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, 'node_modules'),
    ],
  },
};
