import ILink from '../Link/types'

declare namespace IList {
  interface IProps {
    className?: string
    items?: {
      text: string
      href?: string
    }[]
    children: React.ReactElement<IItemProps>[]
  }

  interface IItemProps {
    className?: string
    children: React.ReactElement<ILink.IProps> | string
  }

  interface ILinkProps extends ILink.IProps {}
}

export default IList
