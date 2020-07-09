import { IIcon } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Icon.scss'

/**
 * Sizes
 */
const sizes = {
  XSmall: 'icn--xs',
  Small: 'icn--sm',
  Medium: 'icn--md',
  Large: 'icn--lg'
}

/**
 * Colours
 */
const colours = {
  Dark: 'icn--dark',
  Inverse: 'icn--inverse',
  Success: 'icn--success',
  Warning: 'icn--warning',
  Error: 'icn--error',
  Info: 'icn--info'
}

/**
 * Icon
 */
const Icon: React.FC<IIcon.IProps> = ({ className, name, size = 'Medium', colour = 'Dark' }) => {
  const icon = require(`../../assets/icons/${name.toLowerCase()}.svg`)
  return (
    <span
      className={cx(className, 'icn', sizes[size], colour !== 'Inherit' && colours[colour])}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
}

export default Icon
