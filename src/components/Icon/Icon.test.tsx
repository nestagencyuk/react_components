import * as React from 'react'
import { render } from '@testing-library/react'
import { Icon } from '.'
import '@testing-library/jest-dom/extend-expect'

describe('----- Icon Component -----', () => {
  it('renders without crashing', () => {
    const mountComponentInContext = () => render(<Icon name="User" />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
