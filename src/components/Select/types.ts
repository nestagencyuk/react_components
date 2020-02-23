declare namespace ISelect {
  interface IProps {
    className?: string
    placeholder?: string
    options: {
      value: string
      label: string
    }[]
    value: string
    onChange: (e: any) => void
  }
}

export default ISelect
