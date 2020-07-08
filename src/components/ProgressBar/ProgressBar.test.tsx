import * as React from 'react'
import { render } from '@testing-library/react'
import { ProgressBar } from '.'

describe('----- ProgressBar Component -----', () => {
  it('Renders without crashing', () => {
    const mountComponentInContext = () => render(<ProgressBar width="100px" />)
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
