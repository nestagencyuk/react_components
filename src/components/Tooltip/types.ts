declare namespace ITooltip {
  interface IProps {
    attachTo: HTMLElement
    trigger?: 'Hover' | 'Click'
    align?: 'Left' | 'Right' | 'Top' | 'Bottom'
    children: React.ReactNode
  }
}

export { ITooltip }
