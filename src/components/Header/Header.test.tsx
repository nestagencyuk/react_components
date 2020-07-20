import * as React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'

describe('----- Header Component -----', () => {
  const baseProps = {
    heading: 'Test header'
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Header {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
