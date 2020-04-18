import { IImage } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/image.scss'

/**
 * Components
 */
import { Loader } from '../Loader'

/**
 * Image classes
 */
const variants = {
  Rounded: 'img--rounded',
  Round: 'img--round'
}

/**
 * Image aspects
 */
const aspects = {
  '7x3': 'img--7x3',
  '16x9': 'img--16x9',
  '4x3': 'img--4x3',
  '2x3': 'img--2x3',
  '3x4': 'img--3x4',
  '4x5': 'img--4x5',
  '1x1': 'img--1x1'
}

/**
 * An image with source set
 */
const Image = ({ className, variant, aspect, src, srcSet = [], alt, caption }: IImage.IProps) => (
  <figure className={cx(className, 'img', variants[variant], aspects[aspect])}>
    <picture className="img__picture">
      <span className="img__loader">
        <Loader variant="Circle" />
      </span>
      {srcSet.map((x, i) => (
        <source key={`src-${i}`} media={x.media} srcSet={x.srcSet} />
      ))}
      <img className={'img__img'} src={src} alt={alt} />
    </picture>
    {caption && <figcaption className="img__caption">{caption}</figcaption>}
  </figure>
)

export default Image
