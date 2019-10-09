import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import './Header.scss'

/**
 * A simple header component with a heading and subheading
 */
const Header: React.FC<Header.IProps> = ({ className, heading, subheading, children }) => (
  <header className={cx(className, 'header')}>
    {heading && <h1>{heading}</h1>}
    {subheading && <h1>{subheading}</h1>}
    {children}
  </header>
)

export default Header
