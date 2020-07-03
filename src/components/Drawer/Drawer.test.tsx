import * as React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { Drawer } from '.';
import '@testing-library/jest-dom/extend-expect';
import { IDrawer } from './types';

describe('----- Drawer Component -----', () => {
  const baseProps: IDrawer.IProps = {
    onClick: () => null,
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Drawer {...baseProps} />);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });
});
