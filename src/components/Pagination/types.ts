declare namespace IPagination {
  interface IProps {
    className?: string
    variant?: 'Numbers' | 'Dots'
    current: number
    items: any[]
    onPrev?: () => void
    onCurrent: (i: number) => void
    onNext?: () => void
  }
}

export { IPagination }
