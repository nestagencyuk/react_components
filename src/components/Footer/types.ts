import { IButton } from '../Button/types'

declare namespace IFooter {
  interface IFooterButton extends IButton.IProps {
    text: string
  }

  interface IProps {
    className?: string
    actions: IFooterButton[]
    subInfo?: string
  }
}

export { IFooter }
