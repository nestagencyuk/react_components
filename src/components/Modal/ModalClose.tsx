import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Modal close button
 */
const ModalClose = ({ onClick }: any) => (
  <button className={cx('modal__close')} onClick={() => onClick(false)}>
    Close
    <Icon name={'cross'} />
  </button>
)

export default ModalClose
