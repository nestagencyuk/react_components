import { IIcon } from '../Icon/types'

declare namespace ILink {
  interface IProps {
    className?: string
    component?: React.FC
    variant?: 'Primary' | 'Secondary' | 'Tertiary' | 'Inverse'
    href?: string
    to?: string
    target?: string
    external?: boolean
    icon?: IIconProps
    children?: string
  }

  interface IIconProps extends IIcon.IProps {
    align?: 'Start' | 'End'
  }
}

export { ILink }
