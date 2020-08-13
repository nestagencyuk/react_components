import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Radio } from '.'
import { IRadio } from './types'

describe('----- Radio Component -----', () => {
  let value = false
  const mockFn = jest.fn((val) => (value = val))

  const baseProps: IRadio.IProps = {
    id: 'Radio-test',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Radio {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Fires onChange event', () => {
    const { queryByTestId } = render(<Radio {...baseProps} />)

    fireEvent.click(queryByTestId('radio'))
    expect(value).toBe(true)
  })
})
