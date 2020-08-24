import * as React from 'react'
import { render } from '@testing-library/react'
import { Navtree } from '.'
import { INavtree } from './types'

describe('----- Navtree Component -----', () => {
  const baseProps: INavtree.IProps = {
    variant: 'Expanded',
    items: [
      {
        href: '/',
        text: 'Home',
        icon: {
          name: 'Home'
        }
      },
      {
        text: 'About',
        icon: {
          name: 'Home'
        }
      },
      {
        text: 'Test',
        to: '/test',
        icon: {
          name: 'Home'
        },
        items: [
          {
            text: 'A test child',
            icon: {
              name: 'Home'
            }
          }
        ]
      }
    ]
  }

  it('Renders without crashing', () => {
    const { asFragment } = render(<Navtree {...baseProps} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
