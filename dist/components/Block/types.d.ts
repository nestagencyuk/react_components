/// <reference types="react" />
declare namespace IBlock {
  interface IProps {
    className?: string
    type?: 'Fill'
    children: React.ReactNode | React.ReactNode[]
  }
  interface IClasses {
    [key: string]: 'block--fill'
  }
}
export default IBlock
