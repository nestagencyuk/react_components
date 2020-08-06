declare namespace IRadio {
  interface IProps {
    className?: string
    id: string
    name?: string
    value?: boolean
    disabled?: boolean
    tabIndex?: number
    onChange: (value: boolean) => void
  }
}

export { IRadio }
