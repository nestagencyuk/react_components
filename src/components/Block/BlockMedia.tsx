import IBlock from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Block media - image, video, canvas etc
 */
const BlockMedia = ({ type, src, alt }: IBlock.IMediaProps) =>
  (() => {
    switch (type) {
      case 'Video':
        return <video className={'block__media'} src={src} />
      default:
        return <img className={'block__media'} src={src} alt={alt} />
    }
  })()

export default BlockMedia
