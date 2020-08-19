import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Switch } from '.'

describe('----- Switch Component -----', () => {
  let value: boolean = false
  const mockFn = jest.fn((val) => {
    value = val
  })
  const baseProps = {
    id: 'switch-test',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Switch {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })

  it('Check value changes', () => {
    const { getByTestId, rerender } = render(<Switch {...baseProps} value={value} />)
    const input = getByTestId(`${baseProps.id}-input`)
    expect(input).toHaveProperty('checked', false)
    fireEvent.click(input)
    rerender(<Switch {...baseProps} value={value} />)
    expect(value).toBe(true)
    expect(input).toHaveProperty('checked', true)
  })

  it('Renders disabled correctly without crashing', () => {
    const mountComponentInContext = () => render(<Switch {...baseProps} disabled />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
