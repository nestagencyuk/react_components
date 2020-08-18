import { UIState, OpenState } from '../../types'
import { IFooter } from '../Footer/types'
import { IHeader } from '../Header/types'

declare namespace IAlert {
  interface IProps {
    className?: string
    variant?: UIState
    openState?: OpenState
    footer?: IFooterProps
    children: string
    header?: IHeaderProps
    onClose: () => void
  }

  interface ICloseProps {
    onClick: (e?: React.SyntheticEvent) => void
  }

  interface IIconProps {
    variant?: UIState
  }
  interface IBodyProps {
    children: string
  }

  interface IFooterProps extends IFooter.IProps {
    variant?: UIState
  }

  interface IHeaderProps extends IHeader.IProps {
    children?: React.ReactNode
  }
}

export { IAlert }
