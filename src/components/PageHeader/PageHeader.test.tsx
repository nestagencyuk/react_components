import * as React from 'react';
import { render } from '@testing-library/react';
import { PageHeader } from '.';

describe('PageHeader Component', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<PageHeader>Test</PageHeader>);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });
  
  it('Renders fixed variant without crashing', () => {
    const mountComponentInContext = () => render(<PageHeader variant="Fixed">Test</PageHeader>);
    const { asFragment } = mountComponentInContext();
    expect(asFragment()).toMatchSnapshot();
  });
});
