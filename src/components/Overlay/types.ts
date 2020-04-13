declare namespace IOverlay {
  interface IProps {
    className?: string
    type?: 'Inverse'
    portal?: boolean
    children?: React.ReactNode
    onClick?: () => void
  }
}

export { IOverlay }
