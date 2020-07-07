import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
  docs: {
    page: DocsPage,
    container: DocsContainer
  },
  options: {
    name: 'Century Logistics Component Library'
  },
  backgrounds: [
    { name: 'base', value: '#f9f9f9', default: true },
    { name: 'dark', value: '#333333' }
  ]
})
