import { AlignmentBox } from '../../types'

declare namespace IPopover {
  interface IProps {
    align?: Exclude<AlignmentBox, 'Center'>
    render: React.ReactNode
    children?: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: { [key: string]: any }): React.ReactNode
  }
}

export { IPopover }
