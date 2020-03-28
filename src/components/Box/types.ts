declare namespace IBox {
  interface IProps {
    className?: string
    align?: {
      x?: 'Start' | 'Center' | 'End'
      y?: 'Start' | 'Center' | 'End'
    }
    children: any
  }
}

export default IBox
