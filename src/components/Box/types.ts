import { AlignmentXY } from '../../types'

declare namespace IBox {
  interface IProps {
    className?: string
    align?: AlignmentXY
    fill?: boolean
    children: any
  }
}

export { IBox }
