declare namespace IFloat {
  interface IProps {
    className?: string
    align?: {
      x?: 'Start' | 'Center' | 'End'
      y?: 'Start' | 'Center' | 'End'
    }
    portal?: boolean
    children: any
  }
}

export default IFloat
