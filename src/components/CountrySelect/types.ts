declare namespace ICountrySelect {
  interface IProps {
    className?: string
    id?: string
    value: string
    onChange: (value: string) => void
  }
}

export { ICountrySelect }
