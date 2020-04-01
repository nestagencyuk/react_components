import IGrid from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Grid item that sits within the main grid component.
 */
const GridItem = ({ className, span, children }: IGrid.IItemProps) => (
  <div className={cx(className, 'grid__item', span && `grid__item--${span}`)}>{children}</div>
)

export default GridItem
