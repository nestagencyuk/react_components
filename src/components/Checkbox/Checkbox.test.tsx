import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Checkbox } from '.'

describe('Checkbox Component', () => {
  let value: boolean = false
  const mockFn = jest.fn((val) => { value = val })
  const baseProps = {
    id: 'checkbox-test'
  }

  beforeEach(() => {
    jest.clearAllMocks()
    value = false
  })
  
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Checkbox {...baseProps} onChange={mockFn} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders disabled correctly without crashing', () => {
    const mountComponentInContext = () => render(<Checkbox {...baseProps} disabled onChange={mockFn} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders checked correctly without crashing', () => {
    const mountComponentInContext = () => render(<Checkbox {...baseProps} value={true} onChange={mockFn} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })

  it('Check functionality works', () => {
    const { getByTestId, rerender } = render(<Checkbox {...baseProps} value={value} onChange={mockFn} />)
    const input = getByTestId(`${baseProps.id}-input`)
    expect(input).toHaveProperty('checked', false)
    fireEvent.click(input)
    rerender(<Checkbox {...baseProps} value={value} onChange={mockFn} />)
    expect(value).toBe(true)
    expect(input).toHaveProperty('checked', true)
  })

  it('Detects onChange event', () => {
    const { getByTestId } = render(<Checkbox {...baseProps} value={value} onChange={mockFn} />)
    const label = getByTestId(baseProps.id).firstElementChild
    fireEvent.click(label)
    expect(value).toBe(true)
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
