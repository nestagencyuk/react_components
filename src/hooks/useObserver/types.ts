declare namespace IUseObserver {
  interface IProps extends IntersectionObserverInit {
    target?: HTMLElement
    unobserve?: boolean
  }

  type IState = IntersectionObserverEntry
}

export { IUseObserver }
