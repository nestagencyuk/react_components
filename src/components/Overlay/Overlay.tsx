import IOverlay from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
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
const Overlay = ({ className, type, portal, onClick }: IOverlay.IProps) => {
  const renderOverlay = () => <div className={cx(className, 'overlay', types[type])} onClick={onClick} />

  return portal ? createPortal(renderOverlay(), document.body) : renderOverlay()
}

export default Overlay
