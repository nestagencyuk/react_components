import INavigation from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Navigation list classes
 */
const navListClasses = {
  Start: 'nav__list--start',
  Center: 'nav__list--center',
  End: 'nav__list--end'
}

/**
 * The list to hold the navigation links
 */
const NavigationList = ({ className, align, children }: INavigation.IListProps) => (
  <ul className={cx(className, 'nav__list', navListClasses[align])}>{children}</ul>
)

export default NavigationList
