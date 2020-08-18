import { IBox } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */

import './Box.scss'

/**
 * Alignment classes
 */
const alignX = {
  Start: 'box--start-x',
  End: 'box--end-x',
  Center: 'box--center-x'
}

const alignY = {
  Start: 'box--start-y',
  End: 'box--end-y',
  Center: 'box--center-y'
}

/**
 * A simple box/container component
 */
const Box: React.FC<IBox.IProps> = ({ className, align, fill, children }, ref?: React.Ref<HTMLDivElement>) => {
  const passRef = typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {}

  return (
    <div
      {...passRef}
      className={cx(className, 'box', alignX[align?.x], alignY[align?.y], { 'box--fill': fill })}
      data-testid="box"
    >
      {children}
    </div>
  )
}

export default Box
