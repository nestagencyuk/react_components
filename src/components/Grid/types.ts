declare namespace IGrid {
  interface IProps {
    className?: string
    style?: React.CSSProperties
    gutter?: boolean
    children: React.ReactElement<IItemProps> | Array<React.ReactElement<IItemProps>>
  }

  interface IItemProps {
    className?: string
    style?: React.CSSProperties
    span?: number
    children: React.ReactNode | React.ReactNode[]
  }
}

export { IGrid }
