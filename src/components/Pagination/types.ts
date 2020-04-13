declare namespace IPagination {
  interface IProps {
    className?: string
    type?: 'Numbers' | 'Dots'
    current: number
    items: any[]
    onPrev?: () => void
    onCurrent: (i: number) => void
    onNext?: () => void
  }
}

export { IPagination }
