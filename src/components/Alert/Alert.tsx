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
 * Variants
 */
const variants = {
  Success: 'alert--success',
  Warning: 'alert--warning',
  Error: 'alert--error',
  Info: 'alert--info'
}

/**
 * An alert with states
 */
const Alert: React.FC<IAlert.IProps> = ({ variant = 'Info', footer, children, onClose }) => (
  <aside className={cx('alert', variants[variant])}>
    <AlertClose onClick={onClose} />
    <AlertIcon variant={variant} />
    <AlertBody>{children}</AlertBody>
    <AlertFooter {...footer} />
  </aside>
)

export default Alert
