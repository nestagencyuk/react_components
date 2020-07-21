import * as React from 'react'
import { render } from '@testing-library/react'
import { Alert } from '.'
import { IAlert } from './types'

describe('----- Alert Component -----', () => {
  const mockFn = jest.fn()

  const baseProps: IAlert.IProps = {
    children: '',
    onClose: mockFn
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Alert {...baseProps}>Alert</Alert>)
    expect(asFragment()).toMatchSnapshot()
  })
})
