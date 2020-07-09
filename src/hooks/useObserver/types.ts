declare namespace IUseObserver {
  interface IProps extends IntersectionObserverInit {
    unobserve?: boolean
  }

  type IState = IntersectionObserverEntry
}

export { IUseObserver }
