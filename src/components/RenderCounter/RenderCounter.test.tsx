import * as React from 'react'
import { render } from '@testing-library/react'
import { RenderCounter } from '.'

describe('----- RenderCounter Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<RenderCounter>Test</RenderCounter>)
    expect(asFragment()).toMatchSnapshot()
  })
})
