import * as React from 'react'
import { render } from '@testing-library/react'
import { Upload } from '.'

describe('----- Upload Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Upload id="upload" loadingState="Idle" value={null} onChange={jest.fn} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
