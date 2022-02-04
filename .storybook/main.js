// const webpackFinal = require('./webpack-config.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-scss',
    'storybook-addon-designs',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/vue3',
  core: {
    builder: 'webpack5',
  },
  // TODO - try the webpack approach another time
  // webpackFinal,
  // TODO: Come back to this if we switch to Typescript for stories
  // typescript: {
  //   check: false,
  //   checkOptions: {},
  //   reactDocgen: 'react-docgen-typescript',
  //   reactDocgenTypescriptOptions: {
  //     shouldExtractLiteralValuesFromEnum: true,
  //     propFilter: (prop) => (prop.parent ? !/node_modules/.test(prop.parent.fileName) : true),
  //   },
  // },
};
