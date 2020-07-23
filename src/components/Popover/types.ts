import { RefObject } from 'react'

declare namespace IPopover {
  interface IProps {
    align?: 'Left' | 'Right' | 'Top' | 'Bottom'
    render: React.ReactNode
    children: React.ReactNode
  }
}

export { IPopover }
