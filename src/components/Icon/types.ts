import { Size, UIState } from '../../types'

declare namespace IIcon {
  interface IProps {
    className?: string
    name:
      | 'Branch'
      | 'Caret-down'
      | 'Caret-left'
      | 'Caret-right'
      | 'Caret-up'
      | 'Caret'
      | 'Chevron-down'
      | 'Chevron-left'
      | 'Chevron-right'
      | 'Chevron-up'
      | 'Code-alt'
      | 'Code-square-alt'
      | 'Code'
      | 'Controls'
      | 'Cross'
      | 'Dashboard'
      | 'Download'
      | 'Edit'
      | 'Ellipsis'
      | 'Error'
      | 'External'
      | 'Filter'
      | 'Hamburger'
      | 'Home'
      | 'Image'
      | 'Info'
      | 'Instagram'
      | 'Line'
      | 'Link'
      | 'Linkedin'
      | 'Loading'
      | 'Message'
      | 'Pie-quarter-alt'
      | 'Pie-quarter'
      | 'Pie'
      | 'Pinterest'
      | 'Plus'
      | 'Search'
      | 'Success'
      | 'Table-columns'
      | 'Tick'
      | 'Tools'
      | 'Twitter'
      | 'Upload'
      | 'User'
    size?: 'XSmall' | Size
    colour?: 'Inherit' | 'Dark' | 'Inverse' | UIState
    active?: boolean
  }

  type IIconTypes = { [key in UIState]: IIcon.IProps['name'] }
}

export { IIcon }
