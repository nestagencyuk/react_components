import { IFlag } from './types'
import * as React from 'react'
import cx from 'classnames'
import { capitalise } from '@nestagencyuk/typescript_lib-frontend'

/**
 * Styles
 */
import './Flag.scss'

/**
 * Sizes
 */
const sizes = {
  Small: 'flag--sm',
  Medium: 'flag--md',
  Large: 'flag--lg'
}

/**
 * Flag
 */
const Flag: React.FC<IFlag.IProps> = ({ className, name, size = 'Medium' }) => {
  let icon = null

  try {
    icon = require(`../../assets/flags/${name.toLowerCase()}.svg`)
  } catch {
    icon = require('../../assets/flags/gb.svg')
  }

  return (
    <span
      className={cx(className, 'flag', sizes[size])}
      title={capitalise(name)}
      dangerouslySetInnerHTML={{ __html: icon }}
    />
  )
}

export default Flag
