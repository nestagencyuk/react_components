declare namespace ITooltip {
  interface IProps {
    trigger?: 'Hover' | 'Click'
    align?: 'Left' | 'Right' | 'Top' | 'Bottom'
    render: React.ReactNode
    children: React.ReactNode
  }
}

export { ITooltip }
