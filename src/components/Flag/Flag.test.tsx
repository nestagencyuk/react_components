import * as React from 'react'
import { render } from '@testing-library/react'
import { Flag } from '.'
import { IFlag } from './types'

describe('----- Flag Component -----', () => {
  const baseProps: IFlag.IProps = {
    name: 'Gb'
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Flag {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
