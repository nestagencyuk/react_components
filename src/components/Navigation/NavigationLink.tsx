import INavigation from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * A Navigation link using React Router
 */
const NavigationLink = ({ className, href, target, external, active, children, onClick }: INavigation.ILinkProps) =>
  external ? (
    <a className={cx(className, 'nav__link', { 'nav__link--active': active })} href={href} target={target} onClick={onClick}>
      {children}
    </a>
  ) : (
    <RouterLink className={cx(className, 'nav__link', { 'nav__link--active': active })} to={href} onClick={onClick}>
      {children}
    </RouterLink>
  )

export default NavigationLink
