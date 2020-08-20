import { OpenState } from '../../types'

declare namespace IDrawer {
  interface IProps {
    className?: string
    openState?: OpenState
    children: React.ReactNode
    onClick: (e?: React.SyntheticEvent) => void
  }
}

export { IDrawer }
