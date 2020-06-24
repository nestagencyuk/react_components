import * as React from 'react'
import { render } from '@testing-library/react'
import { Text } from '.'

describe('Text Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Text variant="Alpha">Test</Text>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
