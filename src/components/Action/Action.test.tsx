import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { IAction } from './types'
import { Action } from '.'

describe('----- Action Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IAction.IProps = {
    icon: { name: 'Code' },
    size: 'Large',
    type: 'button',
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

  it('Renders null', () => {
    render(<Action {...baseProps} />)
  })

  it('Renders href', () => {
    render(
      <Action
        {...baseProps}
        href="https://some-url-that-goes-somewhere-on-the-internet-because-thats-how-the-internet-works"
      />
    )
  })
})
