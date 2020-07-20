import * as React from 'react'
import { render } from '@testing-library/react'
import { Float } from '.'

describe('----- Float Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    children: 'test',
    onClose: mockFn
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Float {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
