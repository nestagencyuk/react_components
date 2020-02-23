import IImage from '../Image/types'
declare namespace IFooter {
  interface IProps {
    className?: string
    image?: IImage.IProps
    links?: {
      className?: string
      text: string
      href: string
    }[]
    social?: {
      text: string
      icon: 'Twitter' | 'Instagram'
      href: string
    }[]
    subInfo?: string
  }
}
export default IFooter
