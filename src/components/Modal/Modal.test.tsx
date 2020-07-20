import * as React from 'react'
import { render } from '@testing-library/react'
import { Modal } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Modal Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    children: 'test',
    onClose: mockFn
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Modal {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
