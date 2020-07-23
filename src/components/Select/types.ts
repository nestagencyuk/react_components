import { IIcon } from '../Icon/types'

declare namespace ISelect {
  interface IProps {
    className?: string
    id: string
    multi?: boolean
    multiVariant?: 'Checkbox' | 'Tags'
    filterable?: boolean
    optional?: boolean
    placeholder?: string
    options?: IOption[]
    value?: string | string[]
    icon?: IIcon.IProps
    disabled?: boolean
    onChange: (value: string | string[]) => void
    onSearch?: (value: string | string[]) => void
  }

  interface IInputProps {
    id: string
    value: string | string[]
    placeholder: string
    options: IOption[]
    multi: boolean
    multiVariant?: 'Checkbox' | 'Tags'
    filterable: boolean
    filterValue: string
    disabled: boolean
    onChange: (value: string) => void
  }

  interface IOptionsProps {
    id: string
    open: boolean
    values: string[]
    options: IOption[]
    filtered: IOption[]
    multi: boolean
    multiVariant?: 'Checkbox' | 'Tags'
    optional: boolean
    onClick: (value: string) => void
  }

  interface IOption {
    value: string
    label: string
    disabled?: boolean
  }
}

export { ISelect }
