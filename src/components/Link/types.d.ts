declare namespace Link {
  type Type = 'Primary' | 'Secondary' | 'Tertiary'
  type Class = 'link--primary' | 'link--secondary' | 'link--tertiary' | 'link--action'

  interface IProps {
    className?: any
    type: Type
    href: string
    children: string
  }

  interface IClasses {
    [key: string]: Class
  }
}
