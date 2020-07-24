declare namespace IToggleGroup {
  interface IProps {
    multi?: boolean
    children: React.ReactNode
  }

  interface IRenderProps extends Omit<IProps, 'children'> {
    children(value: { toggles: { [key: string]: boolean }; setToggled: (id: string) => void }): React.ReactNode
  }
}

export { IToggleGroup }
