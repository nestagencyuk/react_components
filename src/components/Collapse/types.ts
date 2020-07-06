declare namespace ICollapse {
  interface IProps {
    className?: string
    active: boolean
    header: IHeaderProps
    children: any
    onToggle?: () => void
  }

  interface IHeaderProps {
    className?: string
    active?: boolean
    heading?: string
    onClick?: () => void
  }

  interface IBodyProps {
    active?: boolean
    children: React.ReactNode
  }
}

export { ICollapse }
