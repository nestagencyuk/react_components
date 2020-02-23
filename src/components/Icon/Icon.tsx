import IIcon from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import 'scss-lib/dist/icon.scss'

/**
 * Sizes
 */
const sizes = {
  XSmall: 'icn--xs',
  Small: 'icn--sm',
  Large: 'icn--lg'
}

/**
 * Colours
 */
const colours = {
  Dark: 'icn--dark',
  Light: 'icn--light',
  Success: 'icn--success',
  Warning: 'icn--warning',
  Error: 'icn--error'
}

/**
 * Icon
 */
const Icon = ({ className, name, size, colour }: IIcon.IProps) => {
  const icon = require(`../../assets/icons/${name}.svg`)

  return (
    <span className={cx(className, 'icn', sizes[size], colours[colour])} dangerouslySetInnerHTML={{ __html: icon }} />
  )
}

export default Icon
