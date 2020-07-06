declare namespace IOverlay {
  interface IProps {
    className?: string
    variant?: 'Inverse'
    portal?: boolean
    fixed?: boolean
    children?: React.ReactNode
    onClick?: () => void
  }
}

export { IOverlay }
