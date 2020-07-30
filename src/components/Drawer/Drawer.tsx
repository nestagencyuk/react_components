import * as React from 'react'
import { useEffect, Fragment } from 'react'
import cx from 'classnames'
import { IDrawer } from './types'

/**
 * Styles
 */
import './Drawer.scss'

/**
 * Components
 */
import { Float } from '../Float'
import { Overlay } from '../Overlay'

/**
 * States
 */
const states = {
  Closed: 'animate',
  Opening: 'animate animate--swipe-in-left',
  Open: 'animate',
  Closing: 'animate animate--swipe-in-left animate--reverse'
}

/**
 * A drawer container that slides out and overlays the main body
 */
const Drawer: React.FC<IDrawer.IProps> = ({ className, state = 'Open', children, onClick }) => {
  /**
   * Close drawer on esc key press
   */
  useEffect(() => {
    const escapeKeyCode = 27
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.keyCode === escapeKeyCode) {
        onClick()
      }
    }

    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  return state !== 'Closed' ? (
    <Fragment>
      <Overlay state={state} portal fixed onClick={onClick} />
      <Float className="p--0" portal align={{ x: 'Start', y: 'Start' }}>
        <div className={cx(className, 'drawer', states[state])}>{children}</div>
      </Float>
    </Fragment>
  ) : null
}

export default Drawer
