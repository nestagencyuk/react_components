import * as React from 'react'
import { render } from '@testing-library/react'
import { Radio } from '.'

describe('----- Radio Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    id: 'Rado-test',
    onChange: mockFn
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Radio {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
