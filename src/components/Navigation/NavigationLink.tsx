import { INavigation } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * A Navigation link using React Router
 */
const NavigationLink = ({ className, component, href, target, active, external, children, onClick }: INavigation.ILinkProps) => {
  const Tag = component || (external ? 'a' : RouterLink)

  return (
    <Tag className={cx(className, 'nav__link', { 'nav__link--active': active })} href={href} to={href} target={target} onClick={onClick}>
      <span>{children}</span>
    </Tag>
  )
}

export default NavigationLink
