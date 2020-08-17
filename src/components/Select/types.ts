import { IIcon } from '../Icon/types'
import { RefObject } from 'react'

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
    tabIndex?: number
    onChange: (value: string | string[]) => void
    onSearch?: (value: string | string[]) => void
  }

  interface IOptionsProps {
    id: string
    trigger: HTMLDivElement
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
