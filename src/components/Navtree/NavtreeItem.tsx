import * as React from 'react'
import { Fragment, useContext } from 'react'
import cx from 'classnames'
import { ToggleTreeContext } from '../../context/ToggleTree'
import { INavtree } from './types'

/**
 * Components
 */
import { NavtreeLink, NavtreeList } from '.'
import { Tooltip } from '../Tooltip'

/**
 * The list item to render within the  navigation
 */
const NavtreeItem: React.FC<INavtree.IItemProps> = (props) => {
  const { toggles, setToggled } = useContext(ToggleTreeContext)

  return (
    <li className={cx(props.className, 'navtree__item')} data-testid="navTreeItem">
      {props.items ? (
        <Fragment>
          <Tooltip render={props.text} align="Right">
            <NavtreeLink {...props} onClick={() => setToggled(props.text, props.depth)} />
          </Tooltip>
          <NavtreeList items={props.items} depth={props.depth + 1} open={toggles[props.text]?.open} />
        </Fragment>
      ) : (
        <Tooltip render={props.text} align="Right">
          <NavtreeLink {...props} />
        </Tooltip>
      )}
    </li>
  )
}

export default NavtreeItem
