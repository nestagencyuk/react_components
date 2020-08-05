import { IGrid } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Grid.scss'

/**
 * A grid system using CSS Grid
 */
const Grid = ({ className, style, gutter, vCentred, children }: IGrid.IProps, ref: React.Ref<HTMLDivElement>) => {
  const passRef = ref && (typeof ref === 'function' || Object.keys(ref).length > 0 ? { ref } : {})

  return (
    <div {...passRef} className={cx(className, 'grid', { 'grid--gutter': gutter })} style={style}>
      {children}
    </div>
  )
}

export default Grid
