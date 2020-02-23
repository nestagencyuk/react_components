declare namespace IInput {
  interface IProps {
    className?: string
    type: 'text' | 'date' | 'number' | 'email' | 'url' | 'tel'
    value: string
    onChange: (e: any) => void
  }
}

export default IInput
