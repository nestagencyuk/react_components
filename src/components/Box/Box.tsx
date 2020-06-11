import { IBox } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/animate.scss' // @todo - import this somewhere else
import '@nestagencyuk/scss_lib/dist/box.scss'
import '@nestagencyuk/scss_lib/dist/keyframes.scss' // @todo - import this somewhere else
import '@nestagencyuk/scss_lib/dist/utility.scss' // @todo - import this somewhere else

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
const Box = ({ className, align, fill, children }: IBox.IProps, ref: React.Ref<HTMLDivElement>) => {
  const passRef = typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {}

  return (
    <div {...passRef} className={cx(className, 'box', alignX[align?.x], alignY[align?.y], { 'box--fill': fill })}>
      {children}
    </div>
  )
}

export default Box
