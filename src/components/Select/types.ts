declare namespace ISelect {
  interface IProps {
    className?: string
    id: string
    searchable?: boolean
    optional?: boolean
    placeholder?: string
    options?: Array<{
      value: string
      label: string
    }>
    value?: string | string[]
    onChange: (e: string | string[]) => void
  }

  interface IOptionsProps {
    [key: string]: any
  }
}

export { ISelect }
