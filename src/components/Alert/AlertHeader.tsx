import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * The main alert header
 */
const AlertHeader: React.FC<IAlert.IHeaderProps> = (props) =>
  props.heading ? <Header className="m--b-md" {...props} /> : null

export default AlertHeader
