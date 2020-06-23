import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * The main alert body
 */
const AlertBody: React.FC<IAlert.IBodyProps> = ({ children }) => (
  <div className="alert__body">
    <Text>{children}</Text>
  </div>
)

export default AlertBody
