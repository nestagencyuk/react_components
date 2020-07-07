import * as React from 'react'
import cx from 'classnames'
import { IButton } from './types'

const ButtonGroup: React.FC<IButton.IBtnGroup> = ({ className, children }) => (
  <div className={cx('btn__group', className)}>{children}</div>
)

export default ButtonGroup
