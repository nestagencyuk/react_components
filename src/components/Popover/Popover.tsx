import * as React from 'react'
import { IPopover } from './types'
import 'react-tippy/dist/tippy.css'
import { Tooltip } from 'react-tippy'

/**
 * My component
 */
const Popover: React.FC<IPopover.IProps> = (props) => {
  return <Tooltip {...props}>{props.children}</Tooltip>
}

export default Popover
