import { ILink } from '../Link/types'

declare namespace INavtree {
  interface IProps {
    className?: string
    items: IItemProps[]
  }

  interface IListProps {
    items: IItemProps[]
    depth: number
    open: boolean
  }

  interface IItemProps extends ILinkProps {
    depth?: number
    text: string
    items?: IItemProps[]
  }

  interface ILinkProps extends ILink.IProps {
    active?: boolean
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { INavtree }
