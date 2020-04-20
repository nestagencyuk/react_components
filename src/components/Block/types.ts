import { IImage } from '../Image/types'
import { IHeader } from '../Header/types'
import { ILink } from '../Link/types'

declare namespace IBlock {
  interface IProps {
    className?: string
    variant?: 'Large' | 'Condensed'
    image: IImageProps
    header?: IHeader.IProps
    link?: ILinkProps
    children: string
  }

  interface IImageProps extends IImage.IProps {
    align: 'Start' | 'End'
  }

  interface ILinkProps extends ILink.IProps {
    text: string
  }
}

export { IBlock }
