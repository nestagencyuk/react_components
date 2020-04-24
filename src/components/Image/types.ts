declare namespace IImage {
  interface IProps {
    className?: string
    variant?: 'Rounded' | 'Round'
    aspect: '4x1' | '7x3' | '16x9' | '4x3' | '2x3' | '3x4' | '4x5' | '1x1'
    src: string
    srcSet?: Array<{
      media: string
      srcSet: string
    }>
    alt: string
    caption?: string
    overlay?: any
    onLoad?: () => void
  }
}

export { IImage }
