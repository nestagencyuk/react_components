import { OpenState } from '../../types'

declare namespace IDrawer {
  interface IProps {
    className?: string
    state?: OpenState
    children: React.ReactNode
    onClick: (e?: React.SyntheticEvent) => void
  }
}

export { IDrawer }
