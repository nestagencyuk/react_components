import { ICard } from './types'
import * as React from 'react'

/**
 * Render alert actions
 */
const CardBody: React.FC<ICard.IBodyProps> = ({ children }) =>
  children ? <div className="card__body">{children}</div> : null

export default CardBody
