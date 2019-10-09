import * as React from 'react'
import cx from 'classnames'

/**
 * Grid item that sits within the main grid component.
 */
const GridItem: React.FunctionComponent<Grid.IItemProps> = ({ className, span, align, children }) => {
  const alignXClasses: Grid.IAlignXClasses = {
    Left: 'grid--left',
    Right: 'grid--right',
    Center: 'grid--center-x'
  }

  const alignYClasses: Grid.IAlignYClasses = {
    Top: 'grid--top',
    Bottom: 'grid--bottom',
    Center: 'grid--center-y'
  }

  return (
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
}

export default GridItem
