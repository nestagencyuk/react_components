import * as React from 'react'
import { render } from '@testing-library/react'
import { Text } from '.'

describe('----- Text Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(
      <Text variant="Alpha" align="Right">
        Test
      </Text>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
