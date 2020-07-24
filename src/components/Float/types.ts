import { AlignmentXY } from '../../types'

declare namespace IFloat {
  interface IProps {
    className?: string
    align?: AlignmentXY
    portal?: boolean
    children: React.ReactNode
  }
}

export { IFloat }
