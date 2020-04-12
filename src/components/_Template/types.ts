declare namespace ITemplate {
  interface IProps {
    className?: string
    type: 'Primary' | 'Secondary' | 'Tertiary'
    children: React.ReactNode
  }
}

export { ITemplate }
