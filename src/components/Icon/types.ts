import { UIState } from '../../types'

declare namespace IIcon {
  interface IProps {
    className?: string
    name: string
    size?: 'XSmall' | 'Small' | 'Medium' | 'Large'
    colour?: 'Dark' | 'Light' | UIState
  }
}

export { IIcon }
