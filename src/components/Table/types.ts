declare namespace ITable {
  interface IProps {
    className?: string
    variant?: 'Primary' | 'Secondary' | 'Tertiary'
    children: React.ReactNode
  }
}

export { ITable }
