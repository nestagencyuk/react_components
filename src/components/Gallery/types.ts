declare namespace IGallery {
  interface IProps {
    className?: string
    variant?: 'Tiles' | 'Masonry'
    lightbox?: boolean
    items: React.ReactNode[] | ((value: { handleClick: (i: number) => void }) => React.ReactNode[])
  }
}

export { IGallery }
