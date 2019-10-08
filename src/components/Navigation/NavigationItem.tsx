import * as React from 'react'
import cx from 'classnames'

const NavigationItem: React.FC<Navigation.IItemProps> = (props) => {
  const { className, active, children } = props

  // console.log(active)
  return <li className={cx('nav__item', { 'nav__item--active': active })}>{children}</li>
}

export default NavigationItem
