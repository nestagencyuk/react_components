import * as React from 'react'
import { render } from '@testing-library/react'
import { SideNav } from '.'
import { ISideNav } from './types'
import { MemoryRouter, Link } from 'react-router-dom'

describe('----- SideNav Component -----', () => {
  const baseProps: ISideNav.IProps = {
    links: [
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
        component: Link,
        href: '/test',
        icon: {
          name: 'Home'
        },
        children: [
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
    const mountComponentInContext = () => {
      return render(
        <MemoryRouter>
          <SideNav {...baseProps} />
        </MemoryRouter>
      )
    }
    const { asFragment } = mountComponentInContext()
    expect(asFragment()).toMatchSnapshot()
  })
})
