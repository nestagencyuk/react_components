import * as React from 'react'
import { render } from '@testing-library/react'
import { Alert } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Alert Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    children: 'test',
    onClose: mockFn
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Alert {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
