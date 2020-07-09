declare namespace IObserver {
  interface IProps extends IntersectionObserverInit {
    unobserve?: boolean
  }

  type IState = IntersectionObserverEntry
}

export { IObserver }
