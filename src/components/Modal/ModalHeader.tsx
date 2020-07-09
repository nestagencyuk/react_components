import { IModal } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * The main modal header
 */
const ModalHeader: React.FC<IModal.IHeaderProps> = (props) =>
  props.heading ? <Header className='modal__header' {...props} /> : null

export default ModalHeader
