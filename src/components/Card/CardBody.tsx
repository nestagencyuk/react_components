import { ICard } from './types'
import * as React from 'react'

/**
 * Render alert actions
 */
const CardBody = ({ children }: ICard.IBodyProps) => (children ? <div className="card__body">{children}</div> : null)

export default CardBody
