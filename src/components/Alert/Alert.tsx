import IAlert from './types'
import * as React from 'react'
import { useContext } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/alert.scss'

/**
 * Components
 */
import { AlertClose, AlertBody, AlertFooter } from '.'
import { Icon } from '../Icon'

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
 * Icons
 */
const icons = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error',
  Info: 'Info'
}

const Alert = ({ type = 'Info', footer, children, onClose }: IAlert.IProps) => (
  <aside className={cx('alert', types[type])}>
    {onClose && <AlertClose onClick={onClose} />}
    <Icon className={cx('alert__icn')} name={icons[type]} colour={type === 'Info' ? 'Dark' : type} />
    {children && <AlertBody>{children}</AlertBody>}
    {footer && <AlertFooter {...footer} />}
  </aside>
)

export default Alert
