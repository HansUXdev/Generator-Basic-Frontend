const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

var debug = process.env.NODE_ENV !== "production";

module.exports = {
  entry: './src/index.js',
  devtool: debug ? "inline-sourcemap" : false,

  output: {
    path: __dirname,
    filename: 'build/js/main.js'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.s[ac]ss$/,
        use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
      }
    ]
  },

  plugins: debug ? [] : [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
  ],

  stats: {
    // Colored output
    colors: true
  },

  // Create Sourcemaps for the bundle
  devtool: 'source-map'
};
