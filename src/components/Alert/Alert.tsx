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
import { AlertHeader, AlertClose, AlertIcon, AlertBody, AlertFooter } from '.'

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
 * States
 */
const openStates = {
  Closed: '',
  Opening: 'animate--fade-in-top',
  Open: '',
  Closing: 'animate--fade-in-top animate--reverse'
}

/**
 * An alert with states
 */
const Alert: React.FC<IAlert.IProps> = ({
  className,
  header,
  variant = 'Info',
  openState = 'Open',
  footer,
  children,
  onClose
}) => (
  <aside className={cx(className, 'alert', variants[variant], openStates[openState])}>
    <AlertHeader {...header} />
    <AlertClose onClick={onClose} />
    <AlertIcon variant={variant} />
    <AlertBody>{children}</AlertBody>
    <AlertFooter {...footer} />
  </aside>
)

export default Alert
