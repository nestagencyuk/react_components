import { ILink } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/link.scss'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'
import { Icon } from '../Icon'

/**
 * Variants
 */
const variants = {
  Primary: 'link--primary',
  Secondary: 'link--secondary'
}

/**
 * A simple link using React Router
 */
const Link = ({ className, component, variant = 'Primary', href, target, external, icon, children }: ILink.IProps) => {
  const Tag = component || (external ? 'a' : RouterLink)

  /**
   * Icon alignment
   */
  const iconStart = icon?.align === 'Start'
  const iconEnd = icon?.align === 'End'

  return children ? (
    <Tag className={cx(className, 'link', variants[variant])} href={href} to={href} target={target} rel={external ? 'noopener' : undefined}>
      {iconStart && <Icon className="link__icn" name={icon.name} />}
      <span>{children}</span>
      {iconEnd && <Icon className="link__icn" name={icon.name} />}
    </Tag>
  ) : null
}

export default Link
