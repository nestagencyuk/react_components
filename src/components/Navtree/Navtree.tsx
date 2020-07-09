import * as React from 'react'
import { INavtree } from './types'
import { useToggleTree } from '../../hooks/useToggleTree'
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
const Navtree: React.FC<INavtree.IProps> = ({ className, links }) => {
  const [toggles, setToggled] = useToggleTree()

  return (
    <nav className={cx(className, 'navtree')}>
      <NavtreeList items={links} nodes={toggles} open={true} onClick={setToggled} />
    </nav>
  )
}

export default Navtree
