import { IModal } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Modal close button
 */
const ModalClose = ({ onClick }: IModal.ICloseProps) => onClick ? (
  <button className={cx('modal__close')} onClick={() => onClick(false)}>
    Close
    <Icon name={'cross'} />
  </button>
) : null

export default ModalClose
