declare namespace IImage {
  interface IProps {
    className?: string
    type: 'Round'
    size: 'Small' | 'Medium' | 'Large'
    src: string
    alt: string
  }
}

export default IImage
