import { Size } from '../../types'

declare namespace ISocialFeed {
  interface IProps {
    className?: string
    variant?: 'Instagram'
    size?: Size
    username: string
    limit?: number
  }
}

export { ISocialFeed }
