import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Drawer } from '.'
import { IDrawer } from './types'

describe('----- Drawer Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IDrawer.IProps = {
    children: '',
    onClick: mockFn
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<Drawer {...baseProps}>Lorem ipsum</Drawer>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Closes the drawer', () => {
    const {} = render(<Drawer {...baseProps}>Lorem ipsum</Drawer>)
    const button = document.querySelector('.overlay')
    fireEvent.click(button)
    expect(baseProps.onClick).toHaveBeenCalledTimes(1)
  })
})
