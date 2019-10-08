import * as React from 'react'
import cx from 'classnames'

const NavigationList: React.FC<Navigation.IListProps> = (props) => {
  const { className, children } = props

  return <ul className={cx('nav__list')}>{children}</ul>
}

export default NavigationList
