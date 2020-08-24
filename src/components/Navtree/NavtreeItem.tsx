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
const NavtreeItem: React.FC<INavtree.IItemProps> = ({ className, items, text, depth, open, ...props }) => {
  const { toggles, setToggled } = useContext(ToggleTreeContext)
  const expandX = items?.some((x) => x.items)

  return (
    <li className={cx(className, 'navtree__item')} data-testid="navtree-item">
      {items ? (
        <Fragment>
          <Tooltip render={text} align="Right">
            {(value: any) => (
              <NavtreeLink
                {...value}
                {...props}
                variant={expandX ? 'ExpandX' : 'ExpandY'}
                onClick={() => setToggled(text, depth)}
              >
                {text}
              </NavtreeLink>
            )}
          </Tooltip>
          <NavtreeList parent={{ text }} items={items} depth={depth + 1} open={toggles[text]?.open} />
        </Fragment>
      ) : (
        <Tooltip render={text} align="Right">
          {(value: any) => (
            <NavtreeLink {...value} {...props}>
              {text}
            </NavtreeLink>
          )}
        </Tooltip>
      )}
    </li>
  )
}

export default NavtreeItem
