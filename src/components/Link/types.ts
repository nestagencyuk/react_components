import { IIcon } from '../Icon/types'

declare namespace ILink {
  interface IProps {
    className?: string
    component?: React.FunctionComponent
    type?: 'Inverse'
    href?: string
    target?: string
    external?: boolean
    icon?: IIconProps
    children: string
  }

  interface IIconProps extends IIcon.IProps {
    align: 'Start' | 'End'
  }
}

export { ILink }
