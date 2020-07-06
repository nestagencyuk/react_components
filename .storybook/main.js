const path = require('path');

module.exports = {
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
  stories: [
    '../src/docs/**/*.stories.@(ts|mdx)',
    '../src/**/*.stories.@(ts|mdx)',
  ],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-backgrounds/register',
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
