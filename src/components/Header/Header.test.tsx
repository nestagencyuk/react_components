import * as React from 'react'
import { render } from '@testing-library/react'
import { Header } from '.'
import { IHeader } from './types'

describe('----- Header Component -----', () => {
  const baseProps: IHeader.IProps = {
    heading: 'Test header',
    subheading: 'Test header'
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Header {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
