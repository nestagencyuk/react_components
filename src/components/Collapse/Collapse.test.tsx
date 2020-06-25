import * as React from 'react'
import { render } from '@testing-library/react'
import { Collapse } from '.'

describe('----- Collapse Component -----', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Collapse active={true} header={{ heading: 'Test'}}>test</Collapse>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
