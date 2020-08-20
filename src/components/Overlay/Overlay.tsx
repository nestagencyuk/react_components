import { IOverlay } from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import cx from 'classnames'

/**
 * Styles
 */
import './Overlay.scss'

/**
 * Variants
 */
const variants = {
  Inverse: 'overlay--inverse'
}

/**
 * States
 */
const openStates = {
  Closed: '',
  Opening: 'animate--fade-in',
  Open: '',
  Closing: 'animate--fade-in animate--reverse'
}

/**
 * An overlay
 */
const Overlay: React.FC<IOverlay.IProps> = ({ className, variant, openState, portal, fixed, children, onClick }) => {
  /**
   * Render the component
   */
  const renderOverlay = () =>
    openState !== 'Closed' ? (
      <div
        className={cx(className, 'overlay', variants[variant], 'animate', openStates[openState], {
          'overlay--fixed': fixed
        })}
        onClick={onClick}
        data-testid="overlay"
      >
        {children}
      </div>
    ) : null

  return portal ? createPortal(renderOverlay(), document.body) : renderOverlay()
}

export default Overlay
