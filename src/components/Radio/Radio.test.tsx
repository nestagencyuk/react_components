import * as React from 'react'
import { render } from '@testing-library/react'
import { Radio } from '.'
import { IRadio } from './types'

describe('----- Radio Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IRadio.IProps = {
    id: 'Radio-test',
    onChange: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Radio {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
