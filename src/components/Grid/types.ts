declare namespace Grid {
  interface IProps {
    className?: string
    gutter?: boolean
    children: React.ReactElement<IItemProps> | React.ReactElement<IItemProps>[]
  }

  interface IItemProps {
    className?: string
    span?: any
    align?: {
      x?: 'Left' | 'Center' | 'Right'
      y?: 'Top' | 'Center' | 'Bottom'
    }
    children: React.ReactNode | React.ReactNode[]
  }

  interface IAlignXClasses {
    [key: string]: 'grid__item--left' | 'grid__item--right' | 'grid__item--center-x'
  }

  interface IAlignYClasses {
    [key: string]: 'grid__item--top' | 'grid__item--bottom' | 'grid__item--center-y'
  }
}

export default Grid
