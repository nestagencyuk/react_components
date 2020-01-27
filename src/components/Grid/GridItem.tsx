import * as React from 'react'
import cx from 'classnames'
import Grid from './types'

/**
 * Grid item classes
 */
const alignXClasses: Grid.IAlignXClasses = {
  Left: 'grid__item--left',
  Right: 'grid__item--right',
  Center: 'grid__item--center-x'
}

const alignYClasses: Grid.IAlignYClasses = {
  Top: 'grid__item--top',
  Bottom: 'grid__item--bottom',
  Center: 'grid__item--center-y'
}

/**
 * Grid item that sits within the main grid component.
 */
const GridItem: React.FunctionComponent<Grid.IItemProps> = ({ className, span, align, children }) => (
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
