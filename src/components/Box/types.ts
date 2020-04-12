import { Alignment } from '../../types'

declare namespace IBox {
  interface IProps {
    className?: string
    align?: {
      x?: Alignment
      y?: Alignment
    }
    children: any
  }
}

export { IBox }
