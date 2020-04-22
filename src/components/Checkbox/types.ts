declare namespace ICheckbox {
  interface IProps {
    className?: string
    id: string
    name?: string
    value?: boolean
    disabled?: boolean
    onChange: (value: boolean) => void
  }
}

export { ICheckbox }
