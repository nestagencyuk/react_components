import * as React from 'react'
import { render } from '@testing-library/react'
import { List } from '.'

describe('----- List Component -----', () => {
  const baseProps = {
    children: 'test'
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<List {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
