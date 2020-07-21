import * as React from 'react'
import { render } from '@testing-library/react'
import { ProgressBar } from '.'

describe('----- ProgressBar Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<ProgressBar value={100} />)

    expect(asFragment()).toMatchSnapshot()
  })
})
