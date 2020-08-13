import * as React from 'react'
import { render } from '@testing-library/react'
import { Link } from '.'
import { ILink } from './types'

describe('----- Link Component -----', () => {
  const baseProps: ILink.IProps = {
    href: '/',
    icon: {
      align: 'Start',
      name: 'Branch'
    },
    variant: 'Primary'
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Link {...baseProps}>Test</Link>)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Renders with optional props', () => {
    const { asFragment } = render(
      <Link
        {...baseProps}
        external
        icon={{
          align: 'End',
          name: 'Branch'
        }}
      >
        Test
      </Link>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
