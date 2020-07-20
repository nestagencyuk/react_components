import * as React from 'react'
import { render } from '@testing-library/react'
import { Popover } from '.'

describe('----- Popover Component -----', () => {
  const baseProps = {
    children: 'Test Popover',
    props: {
      title: 'Test Popover',
      arrow: true
    }
  }

  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Popover {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
