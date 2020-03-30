import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Text } from '../Text'

const AlertBody = ({ children }: any) => (
  <div className={cx('alert__body')}>
    <Text>{children}</Text>
  </div>
)

export default AlertBody
