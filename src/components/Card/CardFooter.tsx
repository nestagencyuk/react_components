import { ICard } from './types'
import * as React from 'react'

/**
 * Components
 */
import { Footer } from '../Footer'

/**
 * Render alert actions
 */
const CardFooter = (props: ICard.IFooterProps) => (props.actions ? <Footer className="card__footer" {...props} /> : null)

export default CardFooter
