import * as React from 'react'
import cx from 'classnames'

// Componentts
import { Icon } from '../Icon'

const AlertClose = ({ onClick }: any) => (
  <button className={cx('alert__close')} onClick={() => onClick(false)}>
    Close
    <Icon name={'cross'} />
  </button>
)

export default AlertClose
