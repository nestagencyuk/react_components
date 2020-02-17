// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import ITemplate from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Template.scss'

/**
 * My stateful component
 */
const Template = ({ className, type }: ITemplate.IProps) => {
  const [myState, setMyState] = useState(false)

  const templateClasses: ITemplate.IClasses = {
    Primary: 'template--primary',
    Secondary: 'template--secondary',
    Tertiary: 'template--tertiary'
  }

  return (
    <div className={cx(className, 'template', templateClasses[type])}>
      My state: {myState ? 'On' : 'Off'}
      <button onClick={() => setMyState(true)}>Click me!</button>
    </div>
  )
}

export default Template
