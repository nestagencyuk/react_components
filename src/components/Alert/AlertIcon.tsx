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
const AlertIcon = ({ variant }: IAlert.IIconProps) => (
  <Icon className="alert__icn" name={icons[variant]} colour={variant === 'Info' ? 'Dark' : variant} />
)

export default AlertIcon
