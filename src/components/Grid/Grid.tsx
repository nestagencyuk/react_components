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
const Grid: React.FunctionComponent<IGrid.IProps> = ({ className, gutter, children }) => (
  <div className={cx(className, 'grid', { 'grid--gutter': gutter })}>{children}</div>
)

export default Grid
