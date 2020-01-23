import * as React from 'react'
import cx from 'classnames'
import Navigation from './types'

/**
 * Components
 */
import { Link } from 'react-router-dom'

/**
 * A Navigation link using React Router
 */
const NavigationLink: React.FC<Navigation.ILinkProps> = ({ className, component, href, active, children, onClick }) => {
  const Tag: any = component || Link

  return (
    <Tag className={cx(className, 'nav__link', { 'nav__link--active': active })} to={href} onClick={onClick}>
      {children}
    </Tag>
  )
}

export default NavigationLink
