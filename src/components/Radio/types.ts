declare namespace IRadio {
  interface IProps {
    className?: string
    id: string
    name?: string
    value?: boolean
    disabled?: boolean
    onChange: (value: boolean) => void
  }
}

export { IRadio }
