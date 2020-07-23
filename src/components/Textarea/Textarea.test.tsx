import * as React from 'react'
import { render } from '@testing-library/react'
import { Textarea } from '.'
import { ITextarea } from './types'

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
})
