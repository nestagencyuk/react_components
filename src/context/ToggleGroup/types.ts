declare namespace IToggleGroup {
  interface IProps {
    multi?: boolean
    children: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: IValue): React.ReactNode
  }

  interface IValue {
    toggles: { [key: string]: boolean }
    setToggled: (id: string) => void
  }
}

export { IToggleGroup }
