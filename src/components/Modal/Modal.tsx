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
 * A modal using React portal to render at the DOM body root
 */
const Modal: React.FC<IModal.IProps> = ({ className, header, footer, children, onClose }) => (
  <aside className={cx(className, 'modal')}>
    <ModalClose onClick={onClose} />
    <ModalHeader {...header} />
    <ModalBody>{children}</ModalBody>
    <ModalFooter {...footer} />
  </aside>
)

export default Modal
