import * as React from 'react'
import { Fragment, useState, useEffect } from 'react'
import { createNavNodes, toggleNavNode } from '../../utils/index'
import cx from 'classnames'

/**
 * Styles
 */
import './SideNav.scss'

/**
 * Components
 */
import { SideNavList, SideNavItem, SideNavLink } from '.'
/**
 * A  navigation that supports two nested levels
 */
const Navigation = ({ className, links, children }: any) => {
  const [nodes, setNodes]: any = useState({})
  const [open, setOpen]: any = useState(false)

  /**
   * Open a nav item
   */
  const handleClick = (id: string) => {
    const newNodes = toggleNavNode(nodes, id)
    setNodes((prev: any) => ({ ...prev, ...newNodes }))
  }

  /**
   * Recursively render list items in an unordered list
   *
   * @param {Array} items
   * The array of links to process
   */
  const renderList = (items: any, state: any, depth: number) => (
    <SideNavList depth={depth} open={open}>
      {items.map((x: any) => (
        <SideNavItem key={`li-${x.text}`}>
          {x.children ? (
            <Fragment>
              <SideNavLink {...x} onClick={() => handleClick(x.text)}>
                {x.text}
              </SideNavLink>
              {state[x.text]?.open && renderList(x.children, state[x.text], state[x.text].depth)}
            </Fragment>
          ) : (
            <SideNavLink {...x}>{x.text}</SideNavLink>
          )}
        </SideNavItem>
      ))}
    </SideNavList>
  )

  /**
   * Create the nav state when component mounts
   */
  useEffect(() => {
    const items = createNavNodes(links)
    setNodes(items)
  }, [])

  return (
    <nav className={cx(className, 'side-nav', 'side-nav--vertical')}>
      {renderList(links, nodes, 0)}
      {children}
    </nav>
  )
}

export default Navigation
