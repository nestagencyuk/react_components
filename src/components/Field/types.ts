declare namespace IField {
  interface IProps {
    className?: string
    id: string
    label?: string
    value?: any
    type?: 'Text' | 'Date' | 'Number' | 'Email' | 'Url' | 'Tel' | 'Select' | 'Checkbox' | 'Radio'
    state: 'Success' | 'Warning' | 'Error'
    msg?: string
    options?: any[]
    onChange: (e: any) => void
  }
}

export { IField }
