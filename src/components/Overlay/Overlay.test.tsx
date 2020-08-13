import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Overlay } from '.'
import { IOverlay } from './types'

describe('----- Overlay Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IOverlay.IProps = {
    onClick: mockFn
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const { asFragment } = render(<Overlay {...baseProps}>Lorem ipsum</Overlay>)

    expect(asFragment()).toMatchSnapshot()
  })

  it('Handles closed state', () => {
    const { queryByText } = render(
      <Overlay {...baseProps} state="Closed">
        Lorem ipsum
      </Overlay>
    )
    expect(queryByText('Lorem ipsum')).toBeFalsy()
  })

  it('Closes the overlay', () => {
    const { getByText } = render(<Overlay {...baseProps}>Lorem ipsum</Overlay>)
    const button = getByText('Lorem ipsum')
    fireEvent.click(button)
    expect(baseProps.onClick).toHaveBeenCalledTimes(1)
  })
})
