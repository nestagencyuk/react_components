import * as React from 'react'
import cx from 'classnames'
import ILink from './types'

/**
 * Styles
 */
import './Link.scss'

/**
 * Components
 */
import { Link as RouterLink } from 'react-router-dom'

/**
 * A simple link using React Router
 */
const Link: React.SFC<ILink.IProps> = ({ className, type, href, children }) => {
  const linkClasses: ILink.IClasses = {
    Primary: 'link--primary',
    Secondary: 'link--secondary',
    Tertiary: 'link--tertiary'
  }

  return (
    <RouterLink className={cx(className, 'link', linkClasses[type])} to={href}>
      {children}
    </RouterLink>
  )
}

export default Link
