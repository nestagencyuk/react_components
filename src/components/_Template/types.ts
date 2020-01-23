declare namespace ITemplate {
  type Type = 'Primary' | 'Secondary' | 'Tertiary'
  type Class = 'template--primary' | 'template--secondary' | 'template--tertiary' | 'template--action'

  interface IProps {
    className?: any
    type: Type
  }

  interface IState {
    [key: string]: any
  }

  interface IClasses {
    [key: string]: Class
  }
}

export default ITemplate
