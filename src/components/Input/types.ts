import { Size } from '../../types'

declare namespace IInput {
  interface IProps {
    className?: string
    id: string
    name?: string
    type?: 'Text' | 'Date' | 'Number' | 'Email' | 'Url' | 'Tel'
    placeholder?: string
    value?: string
    disabled?: boolean
    size?: Size
    onChange: (value: string) => void
  }
}

export { IInput }
