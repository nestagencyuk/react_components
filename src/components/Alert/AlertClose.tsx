import { IAlert } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A close button
 */
const AlertClose = ({ onClick }: IAlert.ICloseProps) => onClick ? (
  <button className={cx('alert__close')} onClick={() => onClick(false)}>
    Close
    <Icon name={'cross'} />
  </button>
) : null

export default AlertClose
