declare namespace IBlock {
  type Type = 'Fill'
  type Class = 'block--fill'

  interface IProps {
    className?: any
    type: Type
  }

  interface IClasses {
    [key: string]: Class
  }
}

export default IBlock
