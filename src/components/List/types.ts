import { ILink } from '../Link/types'

declare namespace IList {
  interface IProps {
    className?: string
    items?: Array<{
      text: string
      href?: string
    }>
    children: Array<React.ReactElement<IItemProps>>
  }

  interface IItemProps {
    className?: string
    children: React.ReactElement<ILinkProps> | string
  }

  type ILinkProps = ILink.IProps
}

export { IList }
