import { UIState } from '../../types'
import { IFooter } from '../Footer/types'

declare namespace IAlert {
  interface IProps {
    type?: UIState
    footer?: any
    children: any
    onClose: () => void
  }

  interface ICloseProps {
    onClick: (bool: boolean) => void
  }

  interface IIconProps {
    type: UIState
  }

  interface IBodyProps {
    children: string
  }

  interface IFooterProps extends IFooter.IProps {
    type: UIState
  }
}

export { IAlert }
