const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const parts = require('./build-utils/webpack.parts');

const productionConfig = require('./build-utils/webpack.prod');
const developmentConfig = require('./build-utils/webpack.dev');

const PATHS = {
  app: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'dist'),
};

const commonConfig = merge([
  {
    entry: {
      app: PATHS.app,
    },
    output: {
      path: PATHS.build,
      filename: '[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Eir Styleguide Dev',
        inject: true,
        template: path.resolve(__dirname, './index.html'),
      }),
    ],
  },
  parts.lintJavaScript({ include: PATHS.app }),
  parts.loadFonts({
    options: {
      name: '[name].[hash:8].[ext]',
    },
  }),

  parts.loadJavaScript({ include: PATHS.app }),
]);

const addons = (addonsArg) => {
  const listedAddons = [].concat.apply([], [addonsArg]).filter(Boolean);

  return listedAddons.map(addonName => require(`./build-utils/addons/webpack.${addonName}.js`));
};

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, productionConfig, ...addons(env.addons));
  }

  return merge(commonConfig, developmentConfig, ...addons(env.addons));
};
