import { ICard } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * Render alert actions
 */
const CardHeader: React.FC<ICard.IHeaderProps> = (props) =>
  props.heading ? <Header className="card__header" {...props} /> : null

export default CardHeader
