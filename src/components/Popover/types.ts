import { TooltipProps } from 'react-tippy'

declare namespace IPopover {
  interface IProps extends TooltipProps {
    children: React.ReactNode
    props?: TooltipProps
  }
}

export { IPopover }
