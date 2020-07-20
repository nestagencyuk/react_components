import * as React from 'react'
import { render } from '@testing-library/react'
import { Label } from '.'

describe('----- Label Component -----', () => {
  const baseProps = {
    children: 'Test label text',
    for: 'A test field'
  }

  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Label {...baseProps} />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
