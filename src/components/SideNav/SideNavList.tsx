import * as React from 'react'
import { useRef } from 'react'
import cx from 'classnames'
import { ISideNav } from './types'

/**
 * The unordered list to render within the  navigation
 */
const NavigationList = ({ className, depth, open, children }: ISideNav.IListProps) => {
  const ref: any = useRef()
  const maxHeight = open && ref?.current.scrollHeight

  return (
    <ul
      ref={ref}
      className={cx(className, 'side-nav__list', `side-nav__list--${depth}`, { 'side-nav__list--open': open })}
      style={{ maxHeight }}
    >
      {children}
    </ul>
  )
}

export default NavigationList
