import * as React from 'react'
import { render } from '@testing-library/react'
import { Button } from '.'

describe('Button Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Button>Test</Button>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
