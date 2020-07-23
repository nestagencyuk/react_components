declare namespace IPopover {
  interface IProps {
    align?: 'Left' | 'Right' | 'Top' | 'Bottom'
    render: React.ReactNode
    children?: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: { [key: string]: any }): React.ReactNode
  }
}

export { IPopover }
