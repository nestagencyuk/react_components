import { IIcon } from '../Icon/types'

declare namespace IButton {
  interface IProps {
    className?: string
    component?: React.FC
    href?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Action'
    icon?: IIconProps
    disabled?: boolean
    submit?: boolean
    children: string
    onClick?: (e: React.SyntheticEvent) => void
  }

  interface IIconProps extends IIcon.IProps {
    align: 'Start' | 'End'
  }
}

export { IButton }
