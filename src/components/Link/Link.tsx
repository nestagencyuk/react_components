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

/**
 * Link classes
 */
const linkClasses: ILink.IClasses = {
  Primary: 'link--primary',
  Secondary: 'link--secondary',
  Tertiary: 'link--tertiary'
}

/**
 * A simple link using React Router
 */
const Link = ({ className, type, href, target, external, children }: ILink.IProps) =>
  external ? (
    <a className={cx(className, 'link', linkClasses[type])} href={href} target={target}>
      {children}
    </a>
  ) : (
    <RouterLink className={cx(className, 'link', linkClasses[type])} to={href}>
      {children}
    </RouterLink>
  )

export default Link
