import { INavigation } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { NavigationItem, NavigationLink } from '.'

/**
 * Navigation list classes
 */
const alignment = {
  Start: 'nav__list--start',
  Center: 'nav__list--center',
  End: 'nav__list--end'
}

/**
 * The list to hold the navigation links
 */
const NavigationList = ({ align, items = [] }: INavigation.IListProps) => (
  <ul className={cx('nav__list', alignment[align])}>
    {items.map((x, i) => (
      <NavigationItem key={`item-${i}`}>
        <NavigationLink {...x}>{x.text}</NavigationLink>
      </NavigationItem>
    ))}
  </ul>
)

export default NavigationList
