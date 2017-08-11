const {join} = require('path');

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index',
  context: __dirname,
  output: {
    path: join(__dirname, 'dist'),
    filename: '[hash]-[name].js',
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx'],
    modules: ['node_modules', join(__dirname, 'vendor')],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: join(__dirname, 'node_modules'),
        loader: 'babel-loader',
        options: {
          presets: [['env', {modules: false}], 'preact'],
        },
      }
    ],
  },
  plugins: [
    new HtmlPlugin({
      filename: 'index.html',
      template: 'index.html.js',
    }),
  ],
};
