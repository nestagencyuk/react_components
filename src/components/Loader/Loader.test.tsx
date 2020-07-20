import * as React from 'react'
import { render } from '@testing-library/react'
import { Loader } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Loader Component -----', () => {
  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Loader />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
