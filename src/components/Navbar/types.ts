import { Alignment } from '../../types'
import { ILink } from '../Link/types'
import { IImage } from '../Image/types'

declare namespace INavbar {
  interface IProps {
    className?: string
    brand?: {
      image?: IImage.IProps
      align?: Alignment
    }
    links: ILinkProps[]
  }

  interface IBrandProps {
    image?: IImage.IProps
    href?: string
  }

  interface IToggleProps {
    toggled: boolean
    onClick: (bool: boolean) => void
  }

  interface IListProps {
    align?: Alignment
    items: any[]
  }

  interface IItemProps {
    active?: boolean
    children: React.ReactElement<ILinkProps>
  }

  interface ILinkProps extends ILink.IProps {
    text: string
    align: Alignment
    active: boolean
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { INavbar }
