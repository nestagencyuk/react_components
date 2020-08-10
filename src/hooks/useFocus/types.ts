declare namespace IUseFocus {
  interface IProps {
    trigger?: 'Click' | 'Hover'
    triggerRef?: React.RefObject<HTMLElement>
    targetRef?: React.RefObject<HTMLElement>
  }
}

export { IUseFocus }
