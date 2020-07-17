import * as React from 'react'
import { render } from '@testing-library/react'
import { Collapse } from '.'

describe('----- Collapse Component -----', () => {
  it('Renders without crashing', () => {
    const { asFragment } = render(
      <Collapse open={true} header={{ heading: 'Test' }}>
        test
      </Collapse>
    )

    expect(asFragment()).toMatchSnapshot()
  })
})
