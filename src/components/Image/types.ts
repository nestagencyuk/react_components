declare namespace IImage {
  interface IProps {
    className?: string
    variant?: 'Rounded' | 'Round'
    aspect: '1x1' | '4x3' | '16x9' | '7x3'
    src: string
    srcSet?: Array<{
      media: string
      srcSet: string
    }>
    alt: string
    caption?: string
  }
}

export { IImage }
