import IOverlay from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/overlay.scss'

/**
 * Types
 */
const types = {
  Inverse: 'overlay--inverse'
}

/**
 * An overlay
 */
const Overlay = ({ className, type, onClick }: IOverlay.IProps) => (
  <div className={cx(className, 'overlay', types[type])} onClick={onClick} />
)

export default Overlay
