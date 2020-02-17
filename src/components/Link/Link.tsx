import ILink from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/link.scss'

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
const Link = ({ className, type, href, children }: ILink.IProps) => (
  <RouterLink className={cx(className, 'link', linkClasses[type])} to={href}>
    {children}
  </RouterLink>
)

export default Link
