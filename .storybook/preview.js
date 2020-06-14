import { configure, addParameters } from '@storybook/react'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

addParameters({
  docs: {
    page: DocsPage,
    container: DocsContainer,
  },
  options: {
    name: 'Nest Component Library'
  },
})