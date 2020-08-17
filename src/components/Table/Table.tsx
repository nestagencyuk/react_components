// ** THIS IS JUST A TEMPLATE FOR NEW COMPONENTS ** //

import { ITable } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
// import './Table.scss'

/**
 * Variants
 */
const variants = {
  Primary: 'table--primary',
  Secondary: 'table--secondary',
  Tertiary: 'table--tertiary'
}

/**
 * My component
 */
const Table: React.FC<ITable.IProps> = ({ className, variant = 'Primary', children }) => (
  <div className={cx(className, 'table', variants[variant])}>{children}</div>
)

export default Table
