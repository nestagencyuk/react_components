import IModal from './types'
import * as React from 'react'
import { Fragment } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/modal.scss'

/**
 * Components
 */
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'

/**
 * A modal using React portal to render at the DOM body root
 */
const Modal = ({ header, footer, children, onClose }: IModal.IProps) => (
  <aside className={cx('modal')}>
    <ModalClose onClick={onClose} />
    {header && <ModalHeader {...header} />}
    {children && <ModalBody>{children}</ModalBody>}
    {footer && <ModalFooter {...footer} />}
  </aside>
)

export default Modal
