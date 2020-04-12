import { IImage } from '../Image/types'

declare namespace IPageFooter {
  interface IProps {
    className?: string
    image?: IImage.IProps
    links: any
    subInfo?: string
  }

  interface IListProps {
    items: any[]
  }

  interface IItemProps {
    [key: string]: any
  }

  interface ILinkProps {
    [key: string]: any
  }
}

export { IPageFooter }
