import * as React from 'react'
import { render } from '@testing-library/react'
import { Input } from '.'

describe('----- Input Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Input id="input" type="Text" onChange={jest.fn} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
