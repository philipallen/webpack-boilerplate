const commonPaths = require('./common-paths');
const webpack = require('webpack');

const config = {
  entry: commonPaths.entryPath,
  output: {
    filename: 'bundle.js',
    path: commonPaths.outputPath,
  },
  module: {
    rules: [
      {
        test: /\.png/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?context=src/assets/images/&name=images/[path][name].[ext]',
          {
            // images loader
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: false,
              },
              optipng: {
                optimizationLevel: 4,
              },
              pngquant: {
                quality: '75-90',
                speed: 3,
              },
            },
          },
        ],
      },
      {
        test: /\.js$/,
        enforce: 'pre',

        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
  plugins: [new webpack.ProgressPlugin()],
};

module.exports = config;
