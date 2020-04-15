declare namespace IToggleGroup {
  interface IProps {
    multi?: boolean
    children: React.ReactNode | ((value: {
      toggles: { [key: string]: boolean }
      setToggled: (id: string) => void
    }) => React.ReactNode)
  }
}

export { IToggleGroup }
