import { IHeader } from '../Header/types'
import { IFooter } from '../Footer/types'

declare namespace IModal {
  interface IProps {
    header?: IHeaderProps
    footer?: IFooterProps
    children: React.ReactNode
    onClose: () => void
  }

  interface ICloseProps {
    onClick: (bool: boolean) => void
  }

  interface IHeaderProps extends IHeader.IProps {
    children?: React.ReactNode
  }

  interface IBodyProps {
    children: React.ReactNode
  }

  interface IFooterProps extends IFooter.IProps {
    children?: React.ReactNode
  }
}

export { IModal }
