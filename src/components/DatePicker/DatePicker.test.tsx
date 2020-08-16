import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DatePicker } from '.'
import { ReactDatePickerProps } from 'react-datepicker'

describe('----- DatePicker Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: ReactDatePickerProps = {
    onChange: mockFn
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<DatePicker {...baseProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
