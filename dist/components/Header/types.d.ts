/// <reference types="react" />
declare namespace IHeader {
  interface IProps {
    className?: string
    type?: 'Fixed'
    heading?: string
    subheading?: string
    children?: React.ReactNode
  }
}
export default IHeader
