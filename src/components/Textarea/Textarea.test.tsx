import * as React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Textarea Component -----', () => {
  const mockFn = jest.fn()

  const baseProps = {
    onChange: mockFn,
    id: 'Test-textarea'
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Textarea {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
