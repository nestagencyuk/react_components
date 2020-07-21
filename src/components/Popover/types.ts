import { TooltipProps } from 'react-tippy'

declare namespace IPopover {
  interface IProps {
    children: React.ReactNode
    props: TooltipProps
  }
}

export { IPopover }
