import { Alignment } from '../../types'
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
 * Link classes
 */
const types = {
  Inverse: 'link--inverse'
}

/**
 * Show an icon
 */
const renderIcon = (icon: ILink.IProps['icon'], align: Alignment) =>
  icon?.align === align && <Icon className={'link__icn'} name={icon.name} />

/**
 * A simple link using React Router
 */
const Link = ({ className, component, type, href, target, external, icon, children }: ILink.IProps) => {
  const Tag = component || (external ? 'a' : RouterLink)

  return children ? (
    <Tag className={cx(className, 'link', types[type])} href={href} to={href} target={target}>
      {renderIcon(icon, 'Start')}
      <span>{children}</span>
      {renderIcon(icon, 'End')}
    </Tag>
  ) : null
}

export default Link
