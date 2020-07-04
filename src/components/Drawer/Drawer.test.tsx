import * as React from 'react';
import { render } from '@testing-library/react';
import { Drawer } from '.';

describe('----- Drawer Component -----', () => {
  let value: boolean = false
  const mockFn = jest.fn(() => { value = !value })
  const baseProps = {
    onClick: mockFn
  };

  beforeEach(() => {
    jest.clearAllMocks()
    value = false
  })

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Drawer {...baseProps}>Lorem ipsum</Drawer>);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Opens drawer', () => {
    const { getByText } = render(<Drawer {...baseProps}>Lorem ipsum</Drawer>);
  });
  
  it('Closes drawer', () => {
    const { getByText } = render(<Drawer {...baseProps}>Lorem ipsum</Drawer>);
  });
});
