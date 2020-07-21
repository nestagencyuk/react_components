import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Navtree } from '.'
import { INavtree } from './types'

describe('----- Navtree Component -----', () => {
  const baseProps: INavtree.IProps = {
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

  it('Opens first level, closes again', () => {
    const { getByText } = render(<Navtree {...baseProps} />)
    const button = getByText('Test').parentElement
    expect(button.nextElementSibling.classList.contains('navtree__list--open')).toBeFalsy()

    fireEvent.click(button)
    expect(button.nextElementSibling.classList.contains('navtree__list--open')).toBeTruthy()

    fireEvent.click(button)
    expect(button.nextElementSibling.classList.contains('navtree__list--open')).toBeFalsy()
  })
})
