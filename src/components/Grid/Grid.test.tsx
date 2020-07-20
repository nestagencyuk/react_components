import * as React from 'react'
import { render } from '@testing-library/react'
import { Grid } from '.'

describe('----- Grid Component -----', () => {
  const baseProps = {
    children: <div>test child</div>
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Grid {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
