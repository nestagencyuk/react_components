declare namespace ISideNav {
  interface IProps {
    className?: string
    links: any
    inverse?: boolean
    children?: any
  }

  interface IClasses {
    [key: string]: 'nav--horizontal' | 'nav--vertical'
  }

  interface IListProps {
    [key: string]: any
  }

  interface IItemProps {
    [key: string]: any
  }

  interface ILinkProps {
    [key: string]: any
  }
}

export { ISideNav }
