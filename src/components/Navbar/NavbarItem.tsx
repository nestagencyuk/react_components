import { INavbar } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * A navbarigation list item, with an active state
 */
const NavbarItem: React.FC<INavbar.IItemProps> = ({ active, children }) => (
  <li className={cx('navbar__item', { 'navbar__item--active': active })}>{children}</li>
)

export default NavbarItem
