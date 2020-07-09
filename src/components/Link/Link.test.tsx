import * as React from 'react'
import { render } from '@testing-library/react'
import { Link } from '.'

describe('----- Link Component -----', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<Link href='/'>Test</Link>)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
