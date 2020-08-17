import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Input } from '.'
import { IInput } from './types'

describe('----- Input Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IInput.IProps = {
    id: 'input',
    onChange: mockFn
  }
  it('Renders without crashing', () => {
    const { asFragment } = render(<Input {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with optional props', () => {
    render(<Input {...baseProps} type="Text" />)
  })

  it('Handles value being less than minValue', () => {
    const { queryByTestId } = render(<Input {...baseProps} minValue={5} maxValue={10} type="Number" />)

    fireEvent.change(queryByTestId('input'), { target: { value: '3' } })
  })
})
