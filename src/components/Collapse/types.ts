declare namespace ICollapse {
  interface IProps {
    className?: string
    open: boolean
    header: IHeaderProps
    children: any
    onToggle?: () => void
  }

  interface IHeaderProps {
    className?: string
    open?: boolean
    heading?: string
    onClick?: () => void
  }

  interface IBodyProps {
    open?: boolean
    children: React.ReactNode
  }
}

export { ICollapse }
