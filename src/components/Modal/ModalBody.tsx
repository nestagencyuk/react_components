import { IModal } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Modal body
 */
const ModalBody = ({ children }: IModal.IBodyProps) =>
  children ? <div className={cx('modal__body')}>{children}</div> : null

export default ModalBody
