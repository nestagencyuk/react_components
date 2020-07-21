import * as React from 'react'
import { INavtree } from './types'
import { ToggleTree } from '../../context/ToggleTree'
import cx from 'classnames'

/**
 * Styles
 */
import './Navtree.scss'

/**
 * Components
 */
import { NavtreeList } from '.'

/**
 * A navigation that supports nested levels
 */
const Navtree: React.FC<INavtree.IProps> = ({ className, items }) => {
  return (
    <ToggleTree>
      <nav className={cx(className, 'navtree')}>
        <NavtreeList items={items} depth={0} open={true} />
      </nav>
    </ToggleTree>
  )
}

export default Navtree
