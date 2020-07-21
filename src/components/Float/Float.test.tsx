import * as React from 'react'
import { render } from '@testing-library/react'
import { Float } from '.'
import { IFloat } from './types'

describe('----- Float Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IFloat.IProps = {
    children: ''
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Float {...baseProps}>Float</Float>)
    expect(asFragment()).toMatchSnapshot()
  })
})
