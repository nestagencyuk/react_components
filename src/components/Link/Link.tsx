import ILink from './types'
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
 * Link classes
 */
const linkClasses: ILink.IClasses = {
  Inverse: 'link--inverse'
}

const renderIcon = (icon: any, align: 'Start' | 'End') =>
  icon && icon.align === align && <Icon className={'link__icn'} name={icon.name} />

/**
 * A simple link using React Router
 */
const Link = ({ className, type, href, target, external, icon, children }: ILink.IProps) =>
  external ? (
    <a className={cx(className, 'link', linkClasses[type])} href={href} target={target}>
      {renderIcon(icon, 'Start')}
      <span>{children}</span>
      {renderIcon(icon, 'End')}
    </a>
  ) : (
    <RouterLink className={cx(className, 'link', linkClasses[type])} to={href}>
      {renderIcon(icon, 'Start')}
      <span>{children}</span>
      {renderIcon(icon, 'End')}
    </RouterLink>
  )

export default Link
