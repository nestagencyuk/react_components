import { UIState } from '../../types'
import { IInput } from '../Input/types'

declare namespace IField {
  interface IProps {
    className?: string
    id: string
    name?: string
    label?: string
    value?: any
    type?: 'Select' | 'Checkbox' | 'Radio' | 'Textarea' | IInput.IProps['type']
    state?: UIState
    msg?: string
    options?: any[]
    onChange: (e: any) => void
  }
}

export { IField }
