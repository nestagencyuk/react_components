import IGrid from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/grid.scss'

/**
 * A grid system using CSS Grid
 */
const Grid = ({ className, gutter, children }: IGrid.IProps) => (
  <div className={cx(className, 'grid', { 'grid--gutter': gutter })}>{children}</div>
)

export default Grid
