import * as React from 'react';
import { render, getByTestId } from '@testing-library/react';
import { Block } from '.';
import '@testing-library/jest-dom/extend-expect';
import { IBlock } from './types';

describe('----- Block Component -----', () => {
  const baseProps: IBlock.IProps = {
    image: { align: 'Start', src: 'https://source.unsplash.com/random/1000x1000', alt: 'Block Image', aspect: '1x1' },
    header: { heading: 'Heading', subheading: 'Sub Heading' },
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
  };

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Block {...baseProps} />);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });

  it('Renders image at the start', () => {
    const { container } = render(<Block {...baseProps} />);
    expect(container.firstElementChild.firstElementChild.firstElementChild.tagName).toEqual('FIGURE');
  });

  it('Renders image at the end', () => {
    const { container } = render(<Block {...baseProps} image={{ ...baseProps.image, align: 'End' }} />);
    expect(container.firstElementChild.lastElementChild.firstElementChild.tagName).toEqual('FIGURE');
  });

  it('Returns null with no children', () => {
    const { container } = render(<Block {...baseProps} children={null} />);
    expect(container.firstChild).toBeNull();
  });

  it('Renders correct classnames when size prop is passed', () => {
    const { queryByTestId } = render(<Block {...baseProps} size="Small" />);
    const container = queryByTestId('grid-item-inner');
    expect(container.className).toContain('p--l-xl p--r-xl');
  });

  it('Renders correct classnames when size prop is passed', () => {
    const testText = 'Some test text';
    const { getByText } = render(<Block {...baseProps} button={{ text: testText }} />);
    const container = getByText(testText);
    expect(container.innerHTML).toEqual(testText);
  });
});
