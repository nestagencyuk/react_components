import * as React from 'react'
import { render } from '@testing-library/react'
import { Field } from '.'
import { IField } from './types'

describe('----- Field Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IField.IProps = {
    id: 'field',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Field {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
