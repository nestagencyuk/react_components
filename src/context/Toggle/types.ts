declare namespace IToggle {
  interface IProps {
    timeout?: number
    children: React.ReactNode | ((value: { toggled: boolean, setToggled: (toggled: boolean) => void }) => React.ReactNode)
  }
}

export { IToggle }
