import { Alignment, OpenState } from '../../types'

declare namespace IFloat {
  interface IProps {
    className?: string
    align?: {
      x?: Alignment
      y?: Alignment
    }
    state?: OpenState
    portal?: boolean
    children: React.ReactNode
  }
}

export { IFloat }
