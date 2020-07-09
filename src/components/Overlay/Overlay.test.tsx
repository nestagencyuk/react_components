import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Overlay } from '.';
import { IOverlay } from './types'

describe('----- Overlay Component -----', () => {
  const mockFn = jest.fn()
  const baseProps: IOverlay.IProps = {
    onClick: mockFn
  };

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Overlay {...baseProps}>Lorem ipsum</Overlay>);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Closes the overlay', () => {
    const { getByText } = render(<Overlay {...baseProps}>Lorem ipsum</Overlay>);
    const button = getByText('Lorem ipsum')
    fireEvent.click(button)
    expect(baseProps.onClick).toHaveBeenCalledTimes(1)
  });
});
