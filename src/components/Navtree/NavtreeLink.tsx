import { INavtree } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A Navtree link
 */
const NavtreeLink: React.FC<INavtree.ILinkProps> = ({
  className,
  component,
  href,
  to,
  target,
  active,
  external,
  icon,
  children,
  onClick
}) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || (onClick ? 'button' : 'a')

  return (
    <Tag
      className={cx(className, 'navtree__link', { 'navtree__link--active': active })}
      href={href}
      to={to}
      target={target}
      rel={external ? 'noopener' : undefined}
      onClick={onClick}
    >
      <Icon className="m--r-lg" {...icon} />
      <span>{children}</span>
    </Tag>
  )
}

export default NavtreeLink
