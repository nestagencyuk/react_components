import { ILink } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Link.scss'

/**
 * Components
 */
import { LinkIcon } from '.'

/**
 * Variants
 */
const variants = {
  Primary: 'link--primary',
  Secondary: 'link--secondary',
  Tertiary: 'link--tertiary',
  Inverse: 'link--inverse'
}

/**
 * A simple link using React Router
 */
const Link: React.FC<ILink.IProps> = ({
  className,
  component,
  variant = 'Primary',
  href,
  to,
  target,
  external,
  icon,
  children
}) => {
  const Tag: React.FC<{ [key: string]: any }> | string = component || 'a'

  /**
   * Icon alignment
   */
  const iconStart = icon?.align === 'Start'
  const iconEnd = icon?.align === 'End'

  return children ? (
    <Tag
      className={cx(className, 'link', variants[variant])}
      href={href}
      to={to}
      target={target}
      rel={external ? 'noopener' : undefined}
    >
      {iconStart && <LinkIcon {...icon} />}
      <span>{children}</span>
      {iconEnd && <LinkIcon {...icon} />}
    </Tag>
  ) : null
}

export default Link
