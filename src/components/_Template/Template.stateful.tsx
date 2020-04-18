// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import { ITemplate } from './types'
import * as React from 'react'
import { useState } from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import '@nestagencyuk/scss_lib/dist/template.scss'

/**
 * Classes
 */
const variants = {
  Primary: 'template--primary',
  Secondary: 'template--secondary',
  Tertiary: 'template--tertiary'
}

/**
 * My stateful component
 */
const Template = ({ className, variant = 'Primary', children }: ITemplate.IProps) => {
  const [myState, setMyState] = useState(false)

  return (
    <div className={cx(className, 'template', variants[variant])}>
      My state: {myState ? 'On' : 'Off'}
      <button onClick={() => setMyState(true)}>Click me!</button>
      {children}
    </div>
  )
}

export default Template
