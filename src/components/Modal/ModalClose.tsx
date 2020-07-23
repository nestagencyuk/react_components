import { IModal } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Action } from '../Action'

/**
 * Modal close button
 */
const ModalClose: React.FC<IModal.ICloseProps> = ({ onClick }) =>
  onClick ? (
    <Action className="modal__close" variant="Tertiary" icon={{ name: 'Cross' }} onClick={() => onClick(false)}>
      Close
    </Action>
  ) : null

export default ModalClose
