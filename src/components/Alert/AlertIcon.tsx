import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Icons
 */
const icons = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error',
  Info: 'Info'
}

/**
 * Render alert actions
 */
const AlertIcon = ({ type }: IAlert.IIconProps) => (
  <Icon className="alert__icn" name={icons[type]} colour={type === 'Info' ? 'Dark' : type} />
)

export default AlertIcon
