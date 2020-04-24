declare namespace ITextarea {
  interface IProps {
    className?: string
    id: string
    name?: string
    value: string
    disabled?: boolean
    onChange: (value: string) => void
  }
}

export { ITextarea }
