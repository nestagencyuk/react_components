declare namespace IImage {
  type Breakpoint = '350px' | '768px' | '1200px' | ''
  interface IProps {
    className?: string
    type?: 'Rounded' | 'Round'
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
