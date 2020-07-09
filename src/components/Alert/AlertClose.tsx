import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * A close button
 */
const AlertClose: React.FC<IAlert.ICloseProps> = ({ onClick }) =>
  onClick ? (
    <button className='alert__close' onClick={() => onClick(false)}>
      Close
      <Icon name='Cross' />
    </button>
  ) : null

export default AlertClose
