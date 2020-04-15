declare namespace IPaginate {
  interface IProps {
    init?: number
    limit?: number
    children: React.ReactNode | ((value: {
      items: number[]
      current: number
      setCurrent: (current: number) => void
    }) => React.ReactNode)
  }
}

export { IPaginate }
