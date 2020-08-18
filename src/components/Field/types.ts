import { UIState, LoadingState } from '../../types'
import { IInput } from '../Input/types'
import { ReactDatePickerProps } from 'react-datepicker'

declare namespace IField {
  interface IProps extends ReactDatePickerProps {
    className?: string
    id: string
    name?: string
    label?: string
    value?: any
    type?: 'Select' | 'Checkbox' | 'Radio' | 'Textarea' | 'DatePicker' | 'Upload' | IInput.IProps['type']
    disabled?: boolean
    uiState?: UIState
    loadingState?: LoadingState
    msg?: string
    minValue?: number
    maxValue?: number
    options?: any[]
    onChange: (value: any) => void
  }
}

export { IField }
