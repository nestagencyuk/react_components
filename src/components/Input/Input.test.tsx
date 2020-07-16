import * as React from 'react'
import { render } from '@testing-library/react'
import { Input } from '.'

describe('----- Input Component -----', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Input id="input" onChange={jest.fn} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
