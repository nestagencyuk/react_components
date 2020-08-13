import { ILink } from '../Link/types'

declare namespace IList {
  interface IProps {
    className?: string
    items: IItemProps[]
  }

  interface IItemProps extends ILinkProps {
    className?: string
    text?: string
  }

  type ILinkProps = ILink.IProps
}

export { IList }
