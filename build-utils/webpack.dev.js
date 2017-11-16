const parts = require('./webpack.parts');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
const Dashboard = require('webpack-dashboard');

const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST,
    port: process.env.PORT,
  }),

  {
    output: {
      devtoolModuleFilenameTemplate: 'webpack:///[absolute-resource-path]',
    },
    plugins: [new DashboardPlugin(Dashboard.setData)],
  },
  parts.generateSourceMaps({ type: 'cheap-module-eval-source-map' }),
  parts.loadSCSS(),
  parts.loadImages(),
]);

module.exports = developmentConfig;
