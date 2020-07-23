import * as React from 'react'
import { render } from '@testing-library/react'
import { Modal } from '.'
import { IModal } from './types'

describe('----- Modal Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IModal.IProps = {
    children: '',
    onClose: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Modal {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
