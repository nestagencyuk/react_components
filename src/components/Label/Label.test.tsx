import * as React from 'react'
import { render } from '@testing-library/react'
import { Label } from '.'
import { ILabel } from './types'

describe('----- Label Component -----', () => {
  const baseProps: ILabel.IProps = {
    for: 'A test field',
    children: ''
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Label {...baseProps}>Test label text</Label>)
    expect(asFragment()).toMatchSnapshot()
  })
})
