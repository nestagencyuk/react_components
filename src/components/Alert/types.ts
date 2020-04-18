import { UIState } from '../../types'
import { IFooter } from '../Footer/types'

declare namespace IAlert {
  interface IProps {
    variant?: UIState
    footer?: IFooterProps
    children: string
    onClose: () => void
  }

  interface ICloseProps {
    onClick: (bool: boolean) => void
  }

  interface IIconProps {
    variant: UIState
  }

  interface IBodyProps {
    children: string
  }

  interface IFooterProps extends IFooter.IProps {
    variant?: UIState
  }
}

export { IAlert }
