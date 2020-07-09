import * as React from 'react'
import { useEffect, Fragment } from 'react'
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
 * A drawer container that slides out and overlays the main body
 */
const Drawer: React.FC<IDrawer.IProps> = ({ children, onClick }) => {
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

  return (
    <Fragment>
      <Overlay className="animate animate fade-in" portal fixed onClick={onClick} />
      <Float className="drawer animate animate--swipe-in-left" portal align={{ x: 'Start', y: 'Start' }}>
        <div>{children}</div>
      </Float>
    </Fragment>
  )
}

export default Drawer
