import { IIcon } from '../Icon/types'

declare namespace IButton {
  interface IButtonIcon extends IIcon.IProps {
    align: 'Start' | 'End'
  }

  interface IProps {
    className?: string
    component?: React.FunctionComponent
    href?: string
    type: 'Primary' | 'Secondary' | 'Tertiary' | 'Action'
    icon?: IButtonIcon
    disabled?: boolean
    submit?: boolean
    children: string
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { IButton }
