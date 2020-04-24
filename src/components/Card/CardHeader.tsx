import { ICard } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Header } from '../Header'

/**
 * Render alert actions
 */
const CardHeader = (props: ICard.IHeaderProps) => (props.heading ? <Header className="card__header" {...props} /> : null)

export default CardHeader
