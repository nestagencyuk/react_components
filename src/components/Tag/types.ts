declare namespace ITag {
  interface IProps {
    className?: string
    children: string
    onClick: (e: React.SyntheticEvent) => void
  }
}

export { ITag }
