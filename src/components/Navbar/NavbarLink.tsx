import { INavbar } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * A Navbar link using React Router
 */
const NavbarLink: React.FC<INavbar.ILinkProps> = ({
  className,
  component,
  href,
  to,
  target,
  active,
  external,
  children,
  onClick
}) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || (onClick ? 'button' : 'a')

  return (
    <Tag
      className={cx(className, 'navbar__link', { 'navbar__link--active': active })}
      href={href}
      to={to}
      target={target}
      rel={external ? 'noopener' : undefined}
      onClick={onClick}
    >
      <span>{children}</span>
    </Tag>
  )
}

export default NavbarLink
