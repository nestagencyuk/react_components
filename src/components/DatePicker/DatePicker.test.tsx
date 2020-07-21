import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { DatePicker } from '.'
import { IDatePicker } from './types'

describe('----- DatePicker Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IDatePicker.IProps = {
    onChange: mockFn,
    props: {
      onChange: mockFn
    }
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<DatePicker {...baseProps} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
