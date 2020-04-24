import { IImage } from '../Image/types'
import { IHeader } from '../Header/types'
import { IFooter } from '../Footer/types'

declare namespace ICard {
  interface IProps {
    className?: string
    image?: IImageProps
    header?: IHeaderProps
    footer?: IFooterProps
    children: React.ReactNode
  }

  interface IImageProps extends IImage.IProps {
    [key: string]: any
  }

  interface IHeaderProps extends IHeader.IProps {
    [key: string]: any
  }

  interface IBodyProps {
    [key: string]: any
  }

  interface IFooterProps extends IFooter.IProps {
    [key: string]: any
  }
}

export { ICard }
