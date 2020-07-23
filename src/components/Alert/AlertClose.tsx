import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Action } from '../Action'

/**
 * A close button
 */
const AlertClose: React.FC<IAlert.ICloseProps> = ({ onClick }) =>
  onClick ? (
    <Action className="alert__close" variant="Tertiary" icon={{ name: 'Cross' }} onClick={() => onClick(false)}>
      Close
    </Action>
  ) : null

export default AlertClose
