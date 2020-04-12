declare namespace ILink {
  interface IProps {
    className?: string
    component?: any
    type?: 'Inverse'
    href?: string
    target?: string
    external?: boolean
    icon?: {
      align: 'Start' | 'End'
      name: string
    }
    children: string
  }
}

export { ILink }
