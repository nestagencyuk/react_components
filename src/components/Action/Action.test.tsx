import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { IAction } from './types'
import { Action } from '.'

describe('----- Action Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IAction.IProps = {
    icon: { name: 'Code' },
    children: '',
    onClick: mockFn
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<Action {...baseProps}>Lorem ipsum</Action>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Fires onClick event', () => {
    const { getByText } = render(<Action {...baseProps}>Lorem ipsum</Action>)
    const button = getByText('Lorem ipsum')
    fireEvent.click(button)
    expect(baseProps.onClick).toHaveBeenCalledTimes(1)
  })
})
