import { IImage } from '../Image/types'

declare namespace ISlider {
  interface IProps {
    className?: string
    type?: 'Fade' | 'Slide'
    tick?: number
    items?: IImage.IProps[]
    children: any
  }
}

export { ISlider }
