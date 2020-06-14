module.exports = {
  stories: [
    '../src/docs/**/*.stories.mdx',
    '../src/**/**/*.stories.mdx'
  ],
  addons: [
    '@storybook/addon-viewport/register',
    '@storybook/addon-docs/register'
  ],
}