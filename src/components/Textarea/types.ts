declare namespace ITextarea {
  interface IProps {
    className?: string
    id: string
    name?: string
    value: string
    onChange: (value: string) => void
  }
}

export { ITextarea }
