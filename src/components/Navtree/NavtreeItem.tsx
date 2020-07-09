import * as React from 'react'
import cx from 'classnames'
import { INavtree } from './types'

/**
 * The list item to render within the  navigation
 */
const NavtreeItem: React.FC<INavtree.IItemProps> = ({ className, children }) => (
  <li className={cx(className, 'navtree__item')}>{children}</li>
)

export default NavtreeItem
