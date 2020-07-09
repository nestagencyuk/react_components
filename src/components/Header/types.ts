import { IText } from '../Text/types'
import { Size } from '../../types'

declare namespace IHeader {
  interface IProps {
    className?: string
    size?: Size
    heading: string
    subheading?: string
  }

  type Sizes = {
    [key in Size]: {
      heading: IText.IProps['variant']
      subheading: IText.IProps['variant']
    }
  }
}

export { IHeader }
