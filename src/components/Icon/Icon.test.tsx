import * as React from 'react'
import { render } from '@testing-library/react'
import { Icon } from '.'
import { IIcon } from './types'

describe('----- Icon Component -----', () => {
  const baseProps: IIcon.IProps = {
    name: 'User'
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Icon {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
