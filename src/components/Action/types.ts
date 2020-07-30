import { Size, UIState } from '../../types'
import { IIcon } from '../Icon/types'

declare namespace IAction {
  interface IProps {
    className?: string
    component?: React.FC
    href?: string
    to?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Inverse'
    size?: 'XSmall' | Size
    type?: 'button' | 'submit'
    state?: UIState
    icon: IIcon.IProps
    disabled?: boolean
    children: string
    onFocus?: (e: React.SyntheticEvent) => void
    onBlur?: (e: React.SyntheticEvent) => void
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { IAction }
