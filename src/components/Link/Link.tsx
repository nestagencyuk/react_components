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
const types = {
  Inverse: 'link--inverse'
}

const renderIcon = (icon: any, align: 'Start' | 'End') =>
  icon?.align === align && <Icon className={'link__icn'} name={icon.name} />

/**
 * A simple link using React Router
 */
const Link = ({ className, type, href, target, external, icon, children }: ILink.IProps) => {
  const Tag: any = external ? 'a' : RouterLink

  return (
    <Tag className={cx(className, 'link', types[type])} href={href} to={href} target={target}>
      {renderIcon(icon, 'Start')}
      <span>{children}</span>
      {renderIcon(icon, 'End')}
    </Tag>
  )
}

export default Link
