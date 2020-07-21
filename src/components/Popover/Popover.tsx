import * as React from 'react'
import { IPopover } from './types'
import { Tooltip } from 'react-tippy'

/**
 * Styles
 */
import './Popover.scss'

/**
 * Popover component
 */
const Popover: React.FC<IPopover.IProps> = (props) => {
  return <Tooltip {...props}>{props.children}</Tooltip>
}

export default Popover
