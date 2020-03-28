declare namespace IGrid {
  interface IProps {
    className?: string
    gutter?: boolean
    children: React.ReactElement<IItemProps> | React.ReactElement<IItemProps>[]
  }

  interface IItemProps {
    className?: string
    span?: number
    children: React.ReactNode | React.ReactNode[]
  }
}

export default IGrid
