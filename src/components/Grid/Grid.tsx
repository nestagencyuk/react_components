import * as React from 'react'
import cx from 'classnames'
import IGrid from './types'

/**
 * Styles
 */
import './Grid.scss'

/**
 * A grid system using CSS Grid
 */
const Grid: React.FunctionComponent<IGrid.IProps> = ({ className, align, gutter, matchHeights, children }) => {
  const alignXClasses: IGrid.IAlignXClasses = {
    Left: 'grid--left',
    Right: 'grid--right',
    Center: 'grid--center-x'
  }

  const alignYClasses: IGrid.IAlignYClasses = {
    Top: 'grid--top',
    Bottom: 'grid--bottom',
    Center: 'grid--center-y'
  }

  return (
    <section
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
    </section>
  )
}

export default Grid
