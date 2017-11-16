const path = require('path');

module.exports = {
  outputPath: path.resolve(__dirname, '../', 'dist'),
  templatePath: path.resolve(__dirname, '../', 'index.html'),
  entryPath: path.resolve(__dirname, '../src', 'index.js'),
};
