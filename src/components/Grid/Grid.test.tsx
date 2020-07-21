import * as React from 'react'
import { render } from '@testing-library/react'
import { Grid } from '.'
import { IGrid } from './types'

describe('----- Grid Component -----', () => {
  const baseProps = {
    children: ''
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(
      <Grid {...baseProps}>
        <div>test child</div>
      </Grid>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
