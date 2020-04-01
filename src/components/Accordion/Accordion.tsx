import IAccordion from './types'
import * as React from 'react'
import cx from 'classnames'

/**
 * Context
 */
import { ToggleGroup } from '../../context/ToggleGroup'

/**
 * My component
 */
const Accordion = ({ className, children }: IAccordion.IProps) => (
  <ToggleGroup>
    <div className={cx(className, 'accordion')}>{children}</div>
  </ToggleGroup>
)

export default Accordion
