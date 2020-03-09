import IImage from '../Image/types'

declare namespace IFooter {
  interface IProps {
    className?: string
    image?: IImage.IProps
    links: {
      text: string
      align: 'Start' | 'End'
      icon?: {
        align: 'Start' | 'End'
        name: string
      }
      href: string
    }[]
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

export default IFooter
