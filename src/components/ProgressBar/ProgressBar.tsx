import * as React from 'react'
import { IProgressBar } from './types'
/**
 * Styles
 */
import './ProgressBar.scss'

const ProgressBar: React.FC<IProgressBar.IProps> = (props) => (
  <div className="progress-bar__container">
    <div className="progress-bar" style={{ width: `${props.width}` }}></div>
  </div>
)

export default ProgressBar
