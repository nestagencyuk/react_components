declare namespace ITemplate {
  interface IProps {
    className?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary'
    children: React.ReactNode
  }
}

export { ITemplate }
