import { IAlert } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Alert.scss'

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
const Alert: React.FC<IAlert.IProps> = ({ className, variant = 'Info', footer, children, onClose }) => (
  <aside className={cx(className, 'alert', variants[variant])}>
    <AlertClose onClick={onClose} />
    <AlertIcon variant={variant} />
    <AlertBody>{children}</AlertBody>
    <AlertFooter {...footer} />
  </aside>
)

export default Alert
