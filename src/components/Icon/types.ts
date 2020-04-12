declare namespace IIcon {
  interface IProps {
    className?: string
    name: string
    size?: 'XSmall' | 'Small' | 'Medium' | 'Large'
    colour?: 'Dark' | 'Light' | 'Success' | 'Warning' | 'Error'
  }
}

export { IIcon }
