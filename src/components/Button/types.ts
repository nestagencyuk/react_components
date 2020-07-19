import { Size } from '../../types'
import { IIcon } from '../Icon/types'

declare namespace IButton {
  interface IProps {
    className?: string
    component?: React.FC
    href?: string
    to?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Inverse' | 'Action'
    type?: 'button' | 'submit'
    size?: Size
    icon?: IIconProps
    disabled?: boolean
    children?: string
    onClick?: (e: React.SyntheticEvent) => void
    onBlur?: (e: React.SyntheticEvent) => void
  }

  interface IIconProps extends IIcon.IProps {
    align: 'Start' | 'End'
  }

  interface IBtnGroup {
    children: React.ReactNode
    className?: string
  }
}

export { IButton }
