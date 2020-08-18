declare namespace ILabel {
  interface IProps {
    className?: string
    variant?: 'Inline' | 'Stacked'
    for: string
    interactive?: boolean
    children: any
  }
}

export { ILabel }
