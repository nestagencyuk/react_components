import { ICollapse } from './types'
import * as React from 'react'
import { useRef } from 'react'
import cx from 'classnames'

/**
 * Body for the collapse panel
 */
const CollapseBody = ({ active, children }: ICollapse.IBodyProps) => {
  const ref = useRef<HTMLDivElement>()
  const maxHeight = active ? ref?.current?.scrollHeight : 0

  return (
    <div ref={ref} className={cx('collapse__body', { 'collapse__body--active': active })} style={{ maxHeight }}>
      {children}
    </div>
  )
}

export default CollapseBody
