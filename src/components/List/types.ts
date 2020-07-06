import { ILink } from '../Link/types'

declare namespace IList {
  interface IProps {
    className?: string
    items?: ILinkProps[]
  }

  interface IItemProps {
    className?: string
    children: React.ReactElement<ILinkProps> | string
  }

  interface ILinkProps extends ILink.IProps {
    text: string
  }
}

export { IList }
