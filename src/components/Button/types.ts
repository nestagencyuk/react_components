import { Size } from '../../types'
import { IIcon } from '../Icon/types'

declare namespace IButton {
  interface IProps {
    className?: string
    component?: React.FC
    href?: string
    to?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Inverse' | 'Action'
    size?: Size
    icon?: IIconProps
    disabled?: boolean
    submit?: boolean
    children?: string
    onClick?: (e: React.SyntheticEvent) => void
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
