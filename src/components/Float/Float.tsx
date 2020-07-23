import { IFloat } from './types'
import * as React from 'react'
import { createPortal } from 'react-dom'
import cx from 'classnames'

/**
 * Styles
 */
import './Float.scss'

/**
 * Alignment classes
 */
const alignX = {
  Start: 'float--start-x',
  End: 'float--end-x',
  Center: 'float--center-x'
}

const alignY = {
  Start: 'float--start-y',
  End: 'float--end-y',
  Center: 'float--center-y'
}

/**
 * States
 */
const states: any = {
  Closed: '',
  Opening: {
    Start: 'animate--fade-in-left',
    End: 'animate--fade-in-right',
    Center: 'animate--fade-in-top',
    Bottom: 'animate--fade-in-bottom'
  },
  Open: '',
  Closing: {
    Start: 'animate--fade-in-left animate--reverse',
    End: 'animate--fade-in-right animate--reverse',
    Center: 'animate--fade-in-top animate--reverse',
    Bottom: 'animate--fade-in-bottom animate-reverse'
  }
}

/**
 * Float content somewhere on the screen
 */
const Float: React.FC<IFloat.IProps> = ({
  className,
  align = { x: 'Center', y: 'Start' },
  state = 'Open',
  portal,
  children
}) => {
  /**
   * Render the actual componetn
   */
  const renderFloat = () =>
    state !== 'Closed' ? (
      <aside className={cx(className, 'float', alignX[align?.x], alignY[align?.y])}>
        <div className={cx('animate', states[state][align?.y === 'End' ? 'Bottom' : align?.x])}>{children}</div>
      </aside>
    ) : null

  return portal ? createPortal(renderFloat(), document.body) : renderFloat()
}

export default Float
