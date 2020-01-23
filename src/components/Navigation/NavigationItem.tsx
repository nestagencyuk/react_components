import * as React from 'react'
import cx from 'classnames'
import Navigation from './types'

/**
 * A navigation list item, with an active state
 */
const NavigationItem: React.FC<Navigation.IItemProps> = ({ className, active, children }) => (
  <li className={cx(className, 'nav__item', { 'nav__item--active': active })}>{children}</li>
)

export default NavigationItem
