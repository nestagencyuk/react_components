import { IIcon } from '../Icon/types'
import { Size } from '../../types'
import { IFlag } from 'components/Flag/types'

declare namespace ISelect {
  interface IProps {
    className?: string
    variant?: 'Native' | 'Custom'
    id: string
    size?: Size
    filterable?: boolean
    optional?: boolean
    placeholder?: string
    options?: IOption[]
    value?: string
    icon?: IIcon.IProps
    disabled?: boolean
    tabIndex?: number
    onChange: (value: string) => void
    onSearch?: (value: string) => void
  }

  interface IOptionsProps {
    id: string
    trigger: HTMLDivElement
    options: IOption[]
    filtered: IOption[]
    optional: boolean
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

export { ISelect }
