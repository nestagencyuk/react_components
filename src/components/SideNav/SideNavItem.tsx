import * as React from 'react'
import cx from 'classnames'
import { ISideNav } from './types'

/**
 * The list item to render within the  navigation
 */
const NavigationItem: React.FC<ISideNav.IItemProps> = ({ className, children }) => {
  return <li className={cx(className, 'sideNav__item')}>{children}</li>
}

export default NavigationItem
