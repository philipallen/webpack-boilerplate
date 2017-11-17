const parts = require('./webpack.parts');
const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, '../dist'),
};

const productionConfig = merge([
  {
    output: {
      chunkFilename: '[name].[chunkhash:8].js',
      filename: '[name].[chunkhash:8].js',
    },
    plugins: [new webpack.HashedModuleIdsPlugin()],
  },

  {
    performance: {
      hints: false, // 'error' or false are valid too
      maxEntrypointSize: 100000, // in bytes
      maxAssetSize: 450000, // in bytes
    },
  },
  parts.extractBundles([
    {
      name: 'vendor',
    },
  ]),
  parts.extractSCSS({
    use: [
      {
        loader: 'css-loader', // translates CSS into CommonJS modules
      },
      {
        loader: 'postcss-loader', // Run post css actions
        options: {
          plugins: function() {
            // post css plugins, can be exported to postcss.config.js
            return [require('precss'), require('autoprefixer')];
          },
        },
      },
      {
        loader: 'sass-loader', // compiles SASS to CSS
      },
      // parts.autoprefix(),
    ],
  }),
  // parts.purifyCSS({
  //   paths: glob.sync(`${PATHS.app}/**/*.js`, { nodir: true }),
  // }),
  parts.loadImages({
    options: {
      limit: 15000,
      name: '[name].[hash:8].[ext]',
    },
  }),
  parts.generateSourceMaps({ type: 'source-map' }),
  parts.clean(PATHS.build),
  parts.minifyJavaScript(),
  parts.minifyCSS({
    options: {
      discardComments: {
        removeAll: true,
      },
      // Run cssnano in safe mode to avoid
      // potentially unsafe transformations.
      safe: true,
    },
  }),
  parts.setFreeVariable('process.env.NODE_ENV', 'production'),
]);

module.exports = productionConfig;
