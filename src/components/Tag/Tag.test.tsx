import * as React from 'react'
import { render } from '@testing-library/react'
import { Tag } from '.'

describe('----- Tag Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Tag onClick={jest.fn}>Test</Tag>)
    expect(asFragment()).toMatchSnapshot()
  })
})
