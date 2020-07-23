import { INavbar } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { NavbarItem } from '.'

/**
 * Navbar list classes
 */
const alignment = {
  Start: 'navbar__list--start',
  Center: 'navbar__list--center',
  End: 'navbar__list--end'
}

/**
 * The list to hold the navigation links
 */
const NavbarList: React.FC<INavbar.IListProps> = ({ align, items = [] }) =>
  items.length > 0 ? (
    <ul className={cx('navbar__list', alignment[align])}>
      {items.map((x, i) => (
        <NavbarItem key={`item-${i}`} align={align} {...x} />
      ))}
    </ul>
  ) : null

export default NavbarList
