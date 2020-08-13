import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Textarea } from '.'
import { ITextarea } from './types'
import { act } from 'react-dom/test-utils'

describe('----- Textarea Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: ITextarea.IProps = {
    id: 'Test-textarea',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Textarea {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Fires on change', () => {
    const { getByTestId } = render(<Textarea {...baseProps} />)

    act(() => {
      fireEvent.change(getByTestId('textarea'), { target: { value: 'a' } })
    })
  })
})
