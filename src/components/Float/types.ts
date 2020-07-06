import { Alignment } from '../../types'

declare namespace IFloat {
  interface IProps {
    className?: string
    align?: {
      x?: Alignment
      y?: Alignment
    }
    portal?: boolean
    children: React.ReactNode
  }
}

export { IFloat }
