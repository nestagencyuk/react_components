import { IImage } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/image.scss'

/**
 * Components
 */
import { Loader } from '../Loader'
import { Overlay } from '../Overlay'
import { Button } from '../Button'
import { Text } from '../Text'
import { Box } from '../Box'

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
  '4x1': 'img--4x1',
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
const Image = ({ className, variant, aspect, src, srcSet = [], alt, caption, overlay, onLoad }: IImage.IProps) => {
  const [loading, setLoading] = useState(true)

  /**
   * Set loading
   */
  const handleLoad = () => {
    setLoading(false)
    if (!onLoad) return
    onLoad()
  }

  return (
    <figure className={cx(className, 'img', variants[variant], aspects[aspect])}>
      <picture className="img__picture">
        {loading && (
          <span className="img__loader">
            <Loader variant="Circle" />
          </span>
        )}
        {srcSet.map((x, i) => (
          <source key={`src-${i}`} media={x.media} srcSet={x.srcSet} />
        ))}
        <img className={'img__img'} src={src} alt={alt} onLoad={handleLoad} />
      </picture>
      {caption && <figcaption className="img__caption">{caption}</figcaption>}
      {overlay && (
        <Overlay className={cx('img__overlay', { 'img__overlay--hover': overlay.hover })}>
          <Box align={{ x: 'Center', y: 'Center' }} fill>
            <div>
              <Text tag="h2" variant="Intro" align="Center" inverse>
                {overlay?.heading}
              </Text>
              <Text variant="Small" align="Center" inverse>
                {overlay?.text}
              </Text>
              {overlay.button && <Button {...overlay.button}>{overlay.button.text}</Button>}
            </div>
          </Box>
        </Overlay>
      )}
    </figure>
  )
}

export default Image
