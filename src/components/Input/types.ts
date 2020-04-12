declare namespace IInput {
  interface IProps {
    className?: string
    id: string
    name?: string
    type: 'text' | 'date' | 'number' | 'email' | 'url' | 'tel'
    value: string
    onChange: (value: string) => void
  }
}

export { IInput }
