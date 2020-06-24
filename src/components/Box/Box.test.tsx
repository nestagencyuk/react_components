import * as React from 'react'
import { render } from '@testing-library/react'
import { Box } from '.'

describe('Box Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Box>Test</Box>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
