import { INavigation } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * A navigation list item, with an active state
 */
const NavigationItem = ({ active, children }: INavigation.IItemProps) => (
  <li className={cx('nav__item', { 'nav__item--active': active })}>{children}</li>
)

export default NavigationItem
