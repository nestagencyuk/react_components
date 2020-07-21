import * as React from 'react'
import { render } from '@testing-library/react'
import { Pagination } from '.'
import { IPagination } from './types'

describe('----- Pagination Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IPagination.IProps = {
    items: [1, 2, 3],
    current: 2,
    onCurrent: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Pagination {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
