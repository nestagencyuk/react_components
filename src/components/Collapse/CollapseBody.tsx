import { ICollapse } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Body for the collapse panel
 */
const CollapseBody: React.FC<ICollapse.IBodyProps> = ({ open, children }) => (
  <div className={cx('collapse__body', { 'collapse__body--active': open })}>{children}</div>
)

export default CollapseBody
