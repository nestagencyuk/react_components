declare namespace IUseFocus {
  interface IProps {
    trigger?: 'Click' | 'Hover'
    toggleable?: boolean
    triggerRef?: React.RefObject<HTMLElement>
    targetRef?: React.RefObject<HTMLElement>
  }
}

export { IUseFocus }
