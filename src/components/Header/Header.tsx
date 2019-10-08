import * as React from 'react'
import * as cx from 'classnames'

/**
 * Styles
 */
import './Header.scss'

const Header = (props: any) => {
  const { children } = props

  return <header className={cx('header')}>{children}</header>
}

export default Header
