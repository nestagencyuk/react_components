import * as React from 'react'
import cx from 'classnames'
import Navigation from './types'

/**
 * The list to hold the navigation links
 */
const NavigationList: React.FC<Navigation.IListProps> = ({ className, children }) => (
  <ul className={cx(className, 'nav__list')}>{children}</ul>
)

export default NavigationList
