import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { NavLink } from 'react-router-dom'

const NavigationLink: React.FC<Navigation.ILinkProps> = (props) => {
  const { className, href, active, children, onClick } = props

  return (
    <NavLink className={cx('nav__link', { 'nav__link--active': active })} to={href} onClick={onClick}>
      {children}
    </NavLink>
  )
}

export default NavigationLink
