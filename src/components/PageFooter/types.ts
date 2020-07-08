import { IImage } from '../Image/types'

declare namespace IPageFooter {
  interface IProps {
    className?: string
    image?: IImage.IProps
    links: any
    subInfo?: React.ReactNode
  }

  interface IListProps {
    items: any[]
  }

  interface IItemProps {
    [key: string]: any
  }

  interface ILinkProps {
    [key: string]: any
    children: any
  }
}

export { IPageFooter }
