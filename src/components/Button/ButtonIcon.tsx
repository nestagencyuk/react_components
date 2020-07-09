import * as React from 'react'
import cx from 'classnames'
import { IButton } from './types'

/**
 * Components
 */
import { Icon } from '../Icon'

/**
 * Alignment
 */
const alignment = {
  Start: 'btn__icn--start',
  End: 'btn__icn--end'
}

/**
 * An icon specific to the button component
 */
const ButtonIcon: React.FC<IButton.IIconProps> = (props) => (
  <Icon className={cx('btn__icn', alignment[props.align])} colour='Inherit' {...props} />
)

export default ButtonIcon
