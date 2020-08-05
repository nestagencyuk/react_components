import { Size } from '../../types'

declare namespace IInput {
  interface IProps {
    className?: string
    id: string
    name?: string
    type?: 'Text' | 'Date' | 'Number' | 'Email' | 'Url' | 'Tel'
    placeholder?: string
    value?: string | number
    disabled?: boolean
    size?: Size
    minValue?: number
    maxValue?: number
    maxLength?: number
    tabIndex?: number
    onChange: (value: string | number) => void
  }
}

export { IInput }
