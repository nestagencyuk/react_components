import { AlignmentBox } from '../../types'

declare namespace ITooltip {
  interface IProps {
    trigger?: 'Hover' | 'Click'
    align?: Exclude<AlignmentBox, 'Center'>
    render: React.ReactNode
    children: React.ReactNode
  }
}

export { ITooltip }
