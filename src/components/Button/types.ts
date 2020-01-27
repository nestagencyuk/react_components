declare namespace IButton {
  interface IProps {
    className?: string
    href?: string
    type: 'Primary' | 'Secondary' | 'Tertiary' | 'Action'
    submit?: boolean
    children: string
    onClick?: (e: React.SyntheticEvent) => void
  }

  interface IClasses {
    [key: string]: 'btn--primary' | 'btn--secondary' | 'btn--tertiary' | 'btn--action'
  }
}

export default IButton
