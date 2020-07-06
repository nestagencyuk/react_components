import { IButton } from '../Button/types'

declare namespace IFooter {
  interface IProps {
    className?: string
    actions?: IButtonProps[]
    subInfo?: string
  }

  interface IButtonProps extends IButton.IProps {
    text: string
  }
}

export { IFooter }
