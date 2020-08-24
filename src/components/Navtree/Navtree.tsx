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
 * Variants
 */
const variants = {
  Compact: 'navtree--compact',
  Expanded: 'navtree--expanded'
}

/**
 * A navigation that supports nested levels
 */
const Navtree: React.FC<INavtree.IProps> = ({ className, variant = 'Expanded', items }) => {
  return (
    <ToggleTree multi={true}>
      <nav className={cx(className, 'navtree', variants[variant])}>
        <NavtreeList parent={null} items={items} depth={0} open={true} />
      </nav>
    </ToggleTree>
  )
}

export default Navtree
