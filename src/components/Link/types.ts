declare namespace ILink {
  interface IProps {
    className?: string
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

  interface IClasses {
    [key: string]: 'link--inverse'
  }
}

export default ILink
