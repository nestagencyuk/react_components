import { OpenState } from '../../types'

declare namespace IOverlay {
  interface IProps {
    className?: string
    variant?: 'Inverse'
    openState?: OpenState
    portal?: boolean
    fixed?: boolean
    children?: React.ReactNode
    onClick?: () => void
  }
}

export { IOverlay }
