declare namespace INavigation {
  interface IProps {
    className?: any
    style?: any
    history?: any
    brand?: {
      img?: {
        src: string
        alt: string
      }
      align?: 'Start' | 'Center' | 'End'
    }
    links: {
      text: string
      align: 'Start' | 'Center' | 'End'
      href: string
      onClick?: (e: React.SyntheticEvent) => void
    }[]
    children?: any
  }

  interface IBrandProps {
    className?: string
    img?: {
      src?: string
      alt?: string
    }
    href?: string
  }

  interface IListProps {
    className?: string
    align?: 'Start' | 'Center' | 'End'
    children: React.ReactElement<IItemProps>[]
  }

  interface IItemProps {
    className?: string
    active?: boolean
    children: React.ReactElement<ILinkProps>
  }

  interface ILinkProps {
    className?: string
    component?: any
    href: string
    active: boolean
    clicked?: boolean
    children: string
    onClick?: (e: React.SyntheticEvent) => void
  }
}

export default INavigation
