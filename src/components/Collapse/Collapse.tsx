import { ICollapse } from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Styles
 */
import '@nestagencyuk/scss_lib/dist/collapse.scss'

/**
 * Components
 */
import { CollapseHeader, CollapseBody } from '.'

/**
 * Collapsible panel component
 */
const Collapse = ({ className, active, header, children, onToggle }: ICollapse.IProps) => (
  <div className={cx(className, 'collapse')}>
    <CollapseHeader active={active} {...header} onClick={onToggle} />
    <CollapseBody active={active}>{children}</CollapseBody>
  </div>
)

export default Collapse
