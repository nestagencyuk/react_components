declare namespace Button {
  type Type = 'Primary' | 'Secondary' | 'Tertiary' | 'Action'
  type Size = 'Small'
  type Class = 'btn--primary' | 'btn--secondary' | 'btn--tertiary' | 'btn--action'

  interface IProps {
    className?: any
    href?: string
    type: Type
    submit?: boolean
    children: string
    onClick?: () => void
  }

  interface IClasses {
    [key: string]: Class
  }
}
