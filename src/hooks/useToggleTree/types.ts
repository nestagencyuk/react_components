declare namespace IToggleTree {
  interface IProps {
    multi?: boolean
  }

  interface IState {
    [key: string]: {
      open: boolean
      depth: number
    }
  }
}

export { IToggleTree }
