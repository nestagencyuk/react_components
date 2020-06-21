declare namespace ISelect {
  interface IProps {
    className?: string
    id: string
    multi?: boolean
    searchable?: boolean
    optional?: boolean
    placeholder?: string
    options?: Array<{
      value: string
      label: string
    }>
    value?: string | string[]
    disabled?: boolean
    onChange: (value: string | string[]) => void
  }

  interface IOptionsProps {
    open: boolean
    values: string[]
    options: Array<{
      value: string
      label: string
    }>
    multi: boolean
    optional: boolean
    onClick: (value: string) => void
  }
}

export { ISelect }
