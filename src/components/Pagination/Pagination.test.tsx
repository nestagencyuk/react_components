import * as React from 'react'
import { render } from '@testing-library/react'
import { Pagination } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Pagination Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    items: [1, 2, 3],
    current: 2,
    onCurrent: mockFn
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Pagination {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
