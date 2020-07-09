import * as React from 'react'
import cx from 'classnames'
import { ILink } from './types'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Alignment
 */
const alignment = {
  Start: 'link__icn--start',
  End: 'link__icn--end'
}

/**
 * An icon specific to the button component
 */
const ButtonIcon: React.FC<ILink.IIconProps> = (props) => (
  <Icon className={cx('link__icn', alignment[props.align])} colour="Inherit" {...props} />
)

export default ButtonIcon
