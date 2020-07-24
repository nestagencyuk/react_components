import * as React from 'react'
import cx from 'classnames'
import { INavtree } from './types'

/**
 * Components
 */
import { NavtreeItem } from '.'

/**
 * The unordered list to render within the  navigation
 */
const NavtreeList: React.FC<INavtree.IListProps> = ({ items, depth, open }) => (
  <ul className={cx('navtree__list', { 'navtree__list--active': open })} data-depth={depth}>
    {items.map((x, i) => (
      <NavtreeItem key={`item-${i}`} depth={depth} {...x} />
    ))}
  </ul>
)

export default NavtreeList
