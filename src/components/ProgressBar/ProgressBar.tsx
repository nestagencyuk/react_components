import * as React from 'react'
import { IProgressBar } from './types'
import cx from 'classnames'

/**
 * Styles
 */
import './ProgressBar.scss'

/**
 * A bar to indicate progress
 */
const ProgressBar: React.FC<IProgressBar.IProps> = ({ className, value }) => (
  <div className={cx(className, 'progress-bar__container')}>
    <div className="progress-bar" style={{ width: `${value}%` }}></div>
  </div>
)

export default ProgressBar
