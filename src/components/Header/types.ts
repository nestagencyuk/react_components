import { Size } from '../../types'

declare namespace IHeader {
  interface IProps {
    className?: string
    size?: Size
    heading: string
    subheading?: string
  }
}

export { IHeader }
