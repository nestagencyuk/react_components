import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Link.scss'

const Link: React.SFC<Link.IProps> = (props) => {
  const { className, type, href } = props

  const linkClasses: Link.IClasses = {
    Primary: 'link--primary',
    Secondary: 'link--secondary',
    Tertiary: 'link--tertiary'
  }

  return <a className={cx(className, 'link', linkClasses[type])}>Link</a>
}

export default Link
