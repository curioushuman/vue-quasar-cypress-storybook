// .storybook/webpack-config.js

/**
 * ! THIs is not yet used!!!
 * Is one of the attempts at fixing the `missing CSS in storybook` issue
 */

const path = require('path');

module.exports = async (config, { configType }) => {
  // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  config.module.rules.push({
    test: /\.s(c|a)ss$/,
    use: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../'),
  });

  // Return the altered config
  return config;
};
