import { IAlert } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/alert.scss'

/**
 * Components
 */
import { AlertClose, AlertIcon, AlertBody, AlertFooter } from '.'

/**
 * Alert types
 */
const types = {
  Success: 'alert--success',
  Warning: 'alert--warning',
  Error: 'alert--error',
  Info: 'alert--info'
}

/**
 * An alert with states
 */
const Alert = ({ type = 'Info', footer, children, onClose }: IAlert.IProps) => (
  <aside className={cx('alert', types[type])}>
    <AlertClose onClick={onClose} />
    <AlertIcon type={type} />
    <AlertBody>{children}</AlertBody>
    <AlertFooter {...footer} />
  </aside>
)

export default Alert
