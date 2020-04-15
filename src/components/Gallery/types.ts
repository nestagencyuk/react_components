declare namespace IGallery {
  interface IProps {
    className?: string
    variant?: 'Tiles' | 'Masonry'
    lightbox?: boolean
    items: any
  }
}

export { IGallery }
