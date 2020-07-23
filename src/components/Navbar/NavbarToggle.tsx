import { INavbar } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Navbar Toggle
 */
const NavbarToggle: React.FC<INavbar.IToggleProps> = ({ toggled, onClick }: INavbar.IToggleProps) => (
  <button className="navbar__toggle" onClick={() => onClick(!toggled)}>
    Toggle
    <Icon name="Hamburger" active={toggled} size="Large" />
  </button>
)

export default NavbarToggle
