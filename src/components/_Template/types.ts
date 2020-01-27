declare namespace ITemplate {
  interface IProps {
    className?: string
    type: 'Primary' | 'Secondary' | 'Tertiary'
  }

  interface IClasses {
    [key: string]: 'template--primary' | 'template--secondary' | 'template--tertiary' | 'template--action'
  }
}

export default ITemplate
