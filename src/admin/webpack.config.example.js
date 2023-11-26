'use strict';
const CopyPlugin = require('copy-webpack-plugin');

module.exports = (config, webpack) => {
  // modify the config object
  config.externals = {
    'better-sqlite3': 'commonjs better-sqlite3',
  };
  
  config.plugins.push(
    new CopyPlugin({
      patterns: [
        { 
          from: 'node_modules/better-sqlite3/', 
          to: 'output/node_modules/better-sqlite3/' 
        }
      ]
    })
  );

  return config;
};
