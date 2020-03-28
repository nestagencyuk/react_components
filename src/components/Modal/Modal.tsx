import IModal from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import { useContext, Fragment } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/modal.scss'

/**
 * Context
 */
import { OpenContext } from '../../context/OpenContext'

/**
 * Components
 */
import { ModalClose, ModalHeader, ModalBody, ModalFooter } from '.'
import { Overlay } from '../Overlay'

/**
 * A modal using React portal to render at the DOM body root
 */
const Modal = ({ header, footer, children }: IModal.IProps) => {
  const { open, setOpen } = useContext(OpenContext)

  return open ? createPortal(
    <Fragment>
      <Overlay onClick={() => setOpen(false)} />
      <aside className={cx('modal')}>
        <ModalClose onClick={setOpen} />
        {header && <ModalHeader {...header} />}
        {children && <ModalBody>{children}</ModalBody>}
        {footer && <ModalFooter {...footer} />}
      </aside>
    </Fragment>
    ,
    document.body
  ) : null
}

export default Modal
