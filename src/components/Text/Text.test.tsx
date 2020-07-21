import * as React from 'react'
import { render } from '@testing-library/react'
import { Text } from '.'

describe('----- Text Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(<Text variant="Alpha">Test</Text>)

    expect(asFragment()).toMatchSnapshot()
  })
})
