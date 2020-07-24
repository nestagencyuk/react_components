import { Alignment } from '../../types'
import { ILink } from '../Link/types'
import { IImage } from '../Image/types'

declare namespace INavbar {
  interface IProps {
    className?: string
    brand?: IBrandProps & {
      align?: Alignment
    }
    items: IItemProps[]
  }

  interface IToggleProps {
    toggled: boolean
    onClick: (e?: React.SyntheticEvent) => void
  }

  interface IBrandProps {
    image?: IImage.IProps
    href?: string
  }

  interface IListProps {
    align: Alignment
    items: IItemProps[]
  }

  interface IItemProps extends ILinkProps {
    className?: string
    align: Alignment
    text: string
  }

  interface ILinkProps extends ILink.IProps {
    active?: boolean
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export { INavbar }
