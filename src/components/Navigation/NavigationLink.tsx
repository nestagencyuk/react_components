import INavigation from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link } from 'react-router-dom'

/**
 * A Navigation link using React Router
 */
const NavigationLink = ({ className, component, href, active, children, onClick }: INavigation.ILinkProps) => {
  const Tag: any = component || Link

  return (
    <Tag className={cx(className, 'nav__link', { 'nav__link--active': active })} to={href} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default NavigationLink
