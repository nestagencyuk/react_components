import { ILink } from '../Link/types'

declare namespace INavtree {
  interface IProps {
    className?: string
    variant: 'Compact' | 'Expanded'
    items: IItemProps[]
  }

  interface IListProps {
    parent: IItemProps
    items: IItemProps[]
    depth: number
    open: boolean
  }

  interface IItemProps extends ILinkProps {
    depth?: number
    text: string
    items?: IItemProps[]
    open?: boolean
  }

  interface ILinkProps extends Omit<ILink.IProps, 'variant'> {
    variant?: 'Primary' | 'ExpandX' | 'ExpandY'
    active?: boolean
    onMouseEnter?: (e: React.SyntheticEvent) => void
    onMouseLeave?: (e: React.SyntheticEvent) => void
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { INavtree }
