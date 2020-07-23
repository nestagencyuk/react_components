import * as React from 'react'
import { render } from '@testing-library/react'
import { Box } from '.'

describe('----- Box Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Box>Test</Box>)
    expect(asFragment()).toMatchSnapshot()
  })
})
