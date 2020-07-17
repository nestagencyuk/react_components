import * as React from 'react'
import { Fragment, useContext } from 'react'
import cx from 'classnames'
import { ToggleTreeContext } from '../../context/ToggleTree'
import { INavtree } from './types'

/**
 * Components
 */
import { NavtreeLink, NavtreeList } from '.'

/**
 * The list item to render within the  navigation
 */
const NavtreeItem: React.FC<INavtree.IItemProps> = (props) => {
  const { toggles, setToggled } = useContext(ToggleTreeContext)

  return (
    <li className={cx(props.className, 'navtree__item')}>
      {props.items ? (
        <Fragment>
          <NavtreeLink {...props} onClick={() => setToggled(props.text, props.depth)}>
            {props.text}
          </NavtreeLink>
          <NavtreeList items={props.items} depth={props.depth + 1} open={toggles[props.text]?.open} />
        </Fragment>
      ) : (
        <NavtreeLink {...props}>{props.text}</NavtreeLink>
      )}
    </li>
  )
}

export default NavtreeItem
