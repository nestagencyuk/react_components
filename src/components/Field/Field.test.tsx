import * as React from 'react'
import { render } from '@testing-library/react'
import { Field } from '.'

describe('----- Field Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    children: 'test',
    onChange: mockFn,
    id: 'test-field'
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Field {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
