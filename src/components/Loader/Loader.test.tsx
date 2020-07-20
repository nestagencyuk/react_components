import * as React from 'react'
import { render } from '@testing-library/react'
import { Loader } from '.'

describe('----- Loader Component -----', () => {
  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Loader />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
