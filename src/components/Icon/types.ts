import { UIState } from '../../types'

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
    | 'Twitter'
    | 'Line'
    | 'Link'
    | 'LinkedIn'
    | 'Message'
    | 'Pie-quarter-alt'
    | 'Pie-quarter'
    | 'Pie'
    | 'Pinterest'
    | 'Success'
    | 'Tick'
    | 'Tools'
    | 'Instagram'
    | 'Upload'
    | 'User'
    size?: 'XSmall' | 'Small' | 'Medium' | 'Large'
    colour?: 'Dark' | 'Light' | UIState
  }

  type IIconTypes = { [key in UIState]: IIcon.IProps['name'] }
}

export { IIcon }
