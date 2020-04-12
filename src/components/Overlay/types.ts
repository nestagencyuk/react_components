declare namespace IOverlay {
  interface IProps {
    className?: string
    type?: 'Inverse'
    portal?: boolean
    onClick?: () => void
  }
}

export { IOverlay }
