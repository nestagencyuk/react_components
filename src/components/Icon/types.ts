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
      | 'Error'
      | 'External'
      | 'Hamburger'
      | 'Home'
      | 'Image'
      | 'Info'
      | 'Instagram'
      | 'Line'
      | 'Link'
      | 'Linkedin'
      | 'Message'
      | 'Pie-quarter-alt'
      | 'Pie-quarter'
      | 'Pie'
      | 'Pinterest'
      | 'Success'
      | 'Tick'
      | 'Tools'
      | 'Twitter'
      | 'Upload'
      | 'User'
    size?: Size
    colour?: 'Inherit' | 'Dark' | 'Inverse' | UIState
  }

  type IIconTypes = { [key in UIState]: IIcon.IProps['name'] }
}

export { IIcon }
