import { Size, Alignment } from '../../types'
import { IIcon } from '../Icon/types'

declare namespace IButton {
  interface IProps {
    className?: string
    component?: React.FC
    href?: string
    to?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Inverse' | 'Action'
    type?: 'button' | 'submit'
    size?: 'XSmall' | Size
    icon?: IIconProps
    disabled?: boolean
    children?: string
    tabIndex?: number
    onFocus?: (e: React.SyntheticEvent) => void
    onBlur?: (e: React.SyntheticEvent) => void
    onClick?: (e: React.SyntheticEvent) => void
  }

  interface IIconProps extends IIcon.IProps {
    align?: Exclude<Alignment, 'Center'>
  }

  interface IGroupProps {
    className?: string
    children: Array<React.ReactElement<IProps>>
  }
}

export { IButton }
