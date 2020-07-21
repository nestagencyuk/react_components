import { IImage } from '../Image/types'
import { IHeader } from '../Header/types'
import { IButton } from '../Button/types'

declare namespace IBlock {
  interface IProps {
    className?: string
    size?: 'Small' | 'Medium' | 'Large'
    image: IImageProps
    header?: IHeader.IProps
    button?: IButtonProps
    children: string
    testId?: string
  }

  interface IImageProps extends IImage.IProps {
    align: 'Start' | 'End'
  }

  interface IButtonProps extends IButton.IProps {
    text: string
  }
}

export { IBlock }
