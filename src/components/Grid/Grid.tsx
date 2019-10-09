import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Grid.scss'

/**
 * A grid system using CSS Grid
 */
const Grid: React.FunctionComponent<Grid.IProps> = ({ className, align, gutter, matchHeights, children }) => {
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
        'grid',
        { 'grid--gutter': gutter },
        { 'grid--match': matchHeights },
        alignXClasses[align && align.x],
        alignYClasses[align && align.y]
      )}
    >
      {children}
    </div>
  )
}

export default Grid
