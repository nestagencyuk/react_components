import { IImage } from '../Image/types'
import { ILink } from '../Link/types'
import { IHeader } from '../Header/types'

declare namespace IBlock {
  interface IBlockImage extends IImage.IProps {
    align: 'Start' | 'End'
  }

  interface IBlockLink extends ILink.IProps {
    text: string
  }

  interface IProps {
    className?: string
    image: IBlockImage
    header?: IHeader.IProps
    link: IBlockLink
    children: any
  }
}

export { IBlock }
