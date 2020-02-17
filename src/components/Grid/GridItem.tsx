import IGrid from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Grid item classes
 */
const alignXClasses: IGrid.IAlignXClasses = {
  Left: 'grid__item--left',
  Right: 'grid__item--right',
  Center: 'grid__item--center-x'
}

const alignYClasses: IGrid.IAlignYClasses = {
  Top: 'grid__item--top',
  Bottom: 'grid__item--bottom',
  Center: 'grid__item--center-y'
}

/**
 * Grid item that sits within the main grid component.
 */
const GridItem = ({ className, span, align, children }: IGrid.IItemProps) => (
  <div
    className={cx(
      className,
      'grid__item',
      span && `grid__item--${span}`,
      alignXClasses[align && align.x],
      alignYClasses[align && align.y]
    )}
  >
    {children}
  </div>
)

export default GridItem
