import IImage from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/image.scss'

/**
 * Image classes
 */
const imageClasses = {
  Round: 'img--round'
}

/**
 * Image sizes
 */
const imageSizes = {
  Small: 'img--sm',
  Medium: 'img--md',
  Large: 'img--lg'
}

/**
 * My component
 */
const Image = ({ className, type, size, src, alt }: IImage.IProps) => (
  <img className={cx(className, 'img', imageClasses[type], imageSizes[size])} src={src} alt={alt} />
)

export default Image
