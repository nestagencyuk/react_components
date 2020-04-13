declare namespace IPaginate {
  interface IProps {
    limit?: number
    children: React.ReactNode | ((value: {
      items: number[]
      current: number
      setCurrent: (current: number) => void
    }) => React.ReactNode)
  }
}

export { IPaginate }
