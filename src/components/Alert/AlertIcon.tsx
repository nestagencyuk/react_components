import { IAlert } from './types'
import { IIcon } from '../Icon/types'
import * as React from 'react'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Icons
 */
const icons: IIcon.IIconTypes = {
  Success: 'Success',
  Warning: 'Info',
  Error: 'Error',
  Info: 'Info'
}

/**
 * Render alert actions
 */
const AlertIcon: React.FC<IAlert.IIconProps> = ({ variant }) => (
  <Icon className="alert__icn" name={icons[variant]} colour={variant === 'Info' ? 'Dark' : variant} />
)

export default AlertIcon
