import { ILoader } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/loader.scss'

/**
 * Types
 */
const types = {
  Circle: 'loader--circle',
  Bounce: 'loader--bounce',
  Bars: 'loader--bars'
}

/**
 * Loader
 */
const Loader = ({ className, type = 'Circle' }: ILoader.IProps) => {
  return <div className={cx(className, 'loader', types[type])} />
}

export default Loader
