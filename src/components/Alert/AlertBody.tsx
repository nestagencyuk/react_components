import { IAlert } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Text } from '../Text'

/**
 * The main alert body
 */
const AlertBody = ({ children }: IAlert.IBodyProps) => (
  <div className="alert__body">
    <Text>{children}</Text>
  </div>
)

export default AlertBody
