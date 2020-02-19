declare namespace ISelect {
  interface IProps {
    className?: string
    placeholder?: string
    options: {
      value: string
      label: string
    }[]
  }
}
export default ISelect
