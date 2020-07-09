import * as React from 'react'
import { Fragment } from 'react'
import cx from 'classnames'
import { INavtree } from './types'

/**
 * Components
 */
import { NavtreeItem, NavtreeLink } from '.'

/**
 * The unordered list to render within the  navigation
 */
const NavtreeList: React.FC<INavtree.IListProps> = ({ className, items, nodes, depth = 0, open, onClick }) => (
  <ul className={cx(className, 'navtree__list', { 'navtree__list--open': open })} data-depth={depth}>
    {items.map((x, i) => (
      <NavtreeItem key={`item-${i}`}>
        {x.children ? (
          <Fragment>
            <NavtreeLink {...x} onClick={() => onClick(x.text, depth)}>{x.text}</NavtreeLink>
            <NavtreeList items={x.children} nodes={nodes} depth={depth + 1} open={nodes[x.text]?.open} onClick={onClick} />
          </Fragment>
        ) : (
          <NavtreeLink {...x}>{x.text}</NavtreeLink>
        )}
      </NavtreeItem>
    ))}
  </ul>
)

export default NavtreeList
