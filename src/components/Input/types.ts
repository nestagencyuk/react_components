declare namespace IInput {
  interface IProps {
    className?: string
    id: string
    name?: string
    type: 'Text' | 'Date' | 'Number' | 'Email' | 'Url' | 'Tel'
    value?: string
    disabled?: boolean
    onChange: (value: string) => void
  }
}

export { IInput }
