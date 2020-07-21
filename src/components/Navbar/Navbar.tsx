import { INavbar } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Navbar.scss'

/**
 * Components
 */
import { NavbarToggle, NavbarBrand, NavbarList } from '.'

/**
 * Brand align styles
 */
const brandAlignment = {
  Start: 'navbar--b-s',
  Center: 'navbar--b-c',
  End: 'navbar--b-e'
}

/**
 * A simple, single level navigation component, allowing for lists to be positioned left,
 * right, or centrally.
 */
const Navbar: React.FC<INavbar.IProps> = ({ className, brand, items = [] }) => {
  const [toggled, setToggled] = useState(false)
  const startItems = items.filter((x) => x.align === 'Start')
  const centerItems = items.filter((x) => x.align === 'Center')
  const endItems = items.filter((x) => x.align === 'End')

  /**
   * Brand alignment
   */
  const brandStart = brand?.align === 'Start'
  const brandCenter = brand?.align === 'Center'
  const brandEnd = brand?.align === 'End'

  return (
    <nav className={cx(className, 'navbar', brandAlignment[brand?.align], { 'navbar--open': toggled })}>
      <div className="navbar__bar">
        {brandStart && <NavbarBrand {...brand} />}
        <NavbarToggle toggled={toggled} onClick={setToggled} />
        {(brandCenter || brandEnd) && <NavbarBrand {...brand} />}
      </div>
      <div className="navbar__lists">
        <NavbarList align="Start" items={startItems} />
        <NavbarList align="Center" items={centerItems} />
        <NavbarList align="End" items={endItems} />
      </div>
    </nav>
  )
}

export default Navbar
