declare namespace Navigation {
  interface IProps {
    className?: any
    router?: any
    brand?: any
    links: any
  }

  interface IState {
    [key: string]: any
  }

  interface IBrandProps {
    className?: string
    img?: string
    children: HTMLImageElement
  }

  interface IListProps {
    className?: string
    children: React.ReactElement<IItemProps>
  }

  interface IItemProps {
    className?: string
    active?: boolean
    children: React.ReactElement<ILinkProps>
  }

  interface ILinkProps {
    className?: string
    href: string
    active: boolean
    children: string
    onClick?: () => void
  }
}
