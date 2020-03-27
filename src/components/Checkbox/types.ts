declare namespace ICheckbox {
  interface IProps {
    className?: string
    id: string
    name?: string
    value?: boolean
    onChange: (value: boolean) => void
  }
}

export default ICheckbox
