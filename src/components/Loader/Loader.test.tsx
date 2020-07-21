import * as React from 'react'
import { render } from '@testing-library/react'
import { Loader } from '.'

describe('----- Loader Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Loader />)
    expect(asFragment()).toMatchSnapshot()
  })
})
