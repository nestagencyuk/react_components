import * as React from 'react'
import { useContext } from 'react'
import cx from 'classnames'
import { ToggleTreeContext } from '../../context/ToggleTree'
import { INavtree } from './types'

/**
 * Components
 */
import { NavtreeItem } from '.'

/**
 * The unordered list to render within the  navigation
 */
const NavtreeList: React.FC<INavtree.IListProps> = ({ parent, items, depth, open }) => {
  const { setToggled } = useContext(ToggleTreeContext)
  const expandX = depth > 0 && items?.some((x) => x.items)

  return (
    <ul
      className={cx(
        'navtree__list',
        { 'navtree__list--active': open },
        { 'navtree__list--expand-x': expandX },
        { 'navtree__list--expand-y': !expandX }
      )}
      data-depth={depth}
    >
      {expandX && (
        <NavtreeItem
          depth={depth}
          text="Back"
          icon={{ name: 'Chevron-left' }}
          onClick={() => setToggled(parent.text, depth - 1)}
        />
      )}

      {items.map((item, i) => (
        <NavtreeItem key={`item-${i}`} depth={depth} {...item} />
      ))}
    </ul>
  )
}

export default NavtreeList
