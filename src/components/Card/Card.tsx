import { ICard } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/card.scss'

/**
 * Components
 */
import { Image } from '../Image'
import { CardHeader, CardBody, CardFooter } from '.'

/**
 * My component
 */
const Card = ({ className, image, header, footer, children }: ICard.IProps) => (
  <div className={cx(className, 'card')}>
    <Image {...image} />
    <CardHeader {...header} />
    <CardBody>{children}</CardBody>
    <CardFooter {...footer} />
  </div>
)

export default Card
