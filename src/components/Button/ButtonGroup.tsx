import * as React from 'react'
import cx from 'classnames'
import { IButton } from './types'

/**
 * A wrapper for rendering a group of buttons
 */
const ButtonGroup: React.FC<IButton.IGroupProps> = ({ className, children }) => (
  <div className={cx('btn-group', className)}>{children}</div>
)

export default ButtonGroup
