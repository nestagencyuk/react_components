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
const types = {
  Rounded: 'img--rounded',
  Round: 'img--round'
}

/**
 * Image aspects
 */
const aspects = {
  '1x1': 'img--1x1',
  '4x3': 'img--4x3',
  '16x9': 'img--16x9'
}

/**
 * My component
 */
const Image = ({ className, type, aspect, src, alt }: IImage.IProps) => (
  <picture className={cx(className, 'img', types[type], aspects[aspect])}>
    <span className={'img__loader'}>
      <Loader type='Circle' />
    </span>
    <source media='(min-width: 500px)' srcSet={src} />
    <img className={'img__item'} srcSet={src} alt={alt} />
  </picture>
)

export default Image
