const path = require('path');

module.exports = {
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  stories: [
    '../src/docs/index.stories.mdx',
    '../src/docs/**/*.stories.@(ts|mdx)',
    '../src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-viewport',
    '@storybook/addon-backgrounds',
    '@storybook/preset-typescript',
    {
      name: '@storybook/addon-docs',
      options: {
        configureJSX: true,
        babelOptions: {
          presets: [
            [
              '@babel/preset-env',
              {
                useBuiltIns: 'entry',
              },
            ],
          ],
        },
        sourceLoaderOptions: null,
      },
    },
  ],
  webpackFinal: async (config, { }) => {
    config.module.rules = [
      ...(config.module.rules || []),
      {
        test: /\.(scss)$/,
        use: ['ignore-loader'],
      },
      {
        test: /\.js$/,
        include: /node_modules\/acorn-jsx/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                [require.resolve('@babel/preset-env'), { modules: 'commonjs' }],
              ],
            },
          },
        ],
      },
    ];

    return config;
  },
};
