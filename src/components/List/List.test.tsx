import * as React from 'react'
import { render } from '@testing-library/react'
import { List } from '.'
import { IList } from './types'

describe('----- List Component -----', () => {
  const baseProps: IList.IProps = {
    items: [{ text: 'List item' }]
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<List {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
