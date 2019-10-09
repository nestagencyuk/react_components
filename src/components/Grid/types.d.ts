declare namespace Grid {
  type AlignX = 'Left' | 'Center' | 'Right'
  type AlignY = 'Top' | 'Center' | 'Bottom'
  type AlignXClass = 'grid--left' | 'grid--right' | 'grid--center-x'
  type AlignYClass = 'grid--top' | 'grid--bottom' | 'grid--center-y'

  interface IProps {
    className?: string
    align?: {
      x: AlignX
      y: AlignY
    }
    gutter?: boolean
    matchHeights?: boolean
    children: any
  }

  interface IItemProps {
    className?: string
    span?: any
    align?: any
    children: any
  }

  interface IAlignXClasses {
    [key: string]: AlignXClass
  }

  interface IAlignYClasses {
    [key: string]: AlignYClass
  }
}
