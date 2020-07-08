declare namespace IObserver {
  interface IProps extends IntersectionObserverInit {
    unobserve?: boolean
  }

  interface IState extends IntersectionObserverEntry
}

export { IObserver }
