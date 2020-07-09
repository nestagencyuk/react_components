import { ICollapse } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import './Collapse.scss'

/**
 * Components
 */
import { CollapseHeader, CollapseBody } from '.'

/**
 * Collapsible panel component
 */
const Collapse: React.FC<ICollapse.IProps> = ({ className, open, header, children, onToggle }) => (
  <div className={cx(className, 'collapse')}>
    <CollapseHeader open={open} {...header} onClick={onToggle} />
    <CollapseBody open={open}>{children}</CollapseBody>
  </div>
)

export default Collapse
