import IBlock from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Components
 */
import { Image } from '../Image'

/**
 * Block media - image, video, canvas etc
 */
const BlockMedia = ({ type, src, alt }: IBlock.IMediaProps) =>
  (() => {
    switch (type) {
      case 'Video':
        return <video className={'block__media'} src={src} />
      default:
        return <Image aspect={'1x1'} className={'block__media'} src={src} alt={alt} />
    }
  })()

export default BlockMedia
