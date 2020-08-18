import { IModal } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Modal.scss'

/**
 * Components
 */
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'

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
 * A modal using React portal to render at the DOM body root
 */
const Modal: React.FC<IModal.IProps> = ({ className, openState = 'Open', header, footer, children, onClose }) => (
  <aside className={cx(className, 'modal', openStates[openState])}>
    <ModalClose onClick={onClose} />
    <ModalHeader {...header} />
    <ModalBody>{children}</ModalBody>
    <ModalFooter {...footer} />
  </aside>
)

export default Modal
