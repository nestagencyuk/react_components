import { IIcon } from '../Icon/types'
import { IFlag } from '../Flag/types'
import { Size } from '../../types'

declare namespace IMultiSelect {
  interface IProps {
    className?: string
    id: string
    variant?: 'Checkbox' | 'Tags'
    size?: Size
    filterable?: boolean
    placeholder?: string
    options?: IOption[]
    value?: string[]
    icon?: IIcon.IProps
    disabled?: boolean
    tabIndex?: number
    onChange: (value: string | string[]) => void
    onSearch?: (value: string) => void
  }

  interface IOptionsProps {
    id: string
    trigger: HTMLDivElement
    values: string[]
    options: IOption[]
    filtered: IOption[]
    variant: 'Checkbox' | 'Tags'
    onClick: (value: string) => void
  }

  interface IOption {
    value: string
    label: string
    disabled?: boolean
    icon?: IIcon.IProps
    flag?: IFlag.IProps
  }
}

export { IMultiSelect }
