import * as React from 'react'
import { render } from '@testing-library/react'
import { Template } from '.'

describe('Template Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Template>Test</Template>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
