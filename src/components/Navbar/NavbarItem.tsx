import { INavbar } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { NavbarLink } from '.'

/**
 * A navigation list item, with an active state
 */
const NavbarItem: React.FC<INavbar.IItemProps> = (props) => (
  <li className={cx('navbar__item')}>
    <NavbarLink {...props}>{props.text}</NavbarLink>
  </li>
)

export default NavbarItem
