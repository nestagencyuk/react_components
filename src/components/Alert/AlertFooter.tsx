import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Footer } from '../Footer'

/**
 * Render alert actions
 */
const AlertFooter: React.FC<IAlert.IFooterProps> = (props) =>
  props.actions ? <Footer className="alert__footer" {...props} /> : null

export default AlertFooter
