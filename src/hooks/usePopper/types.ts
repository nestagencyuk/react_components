declare namespace IUsePopper {
  interface IProps {
    align?: 'Auto' | 'Left' | 'Top' | 'Bottom' | 'Right'
    triggerRef?: React.RefObject<HTMLElement>
    targetRef?: React.RefObject<HTMLElement>
    arrowRef?: React.RefObject<HTMLElement>
  }
}

export { IUsePopper }
