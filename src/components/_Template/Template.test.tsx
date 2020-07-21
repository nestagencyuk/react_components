import * as React from 'react'
import { render } from '@testing-library/react'
import { Template } from '.'

describe('----- Template Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Template>Test</Template>)
    expect(asFragment()).toMatchSnapshot()
  })
})
