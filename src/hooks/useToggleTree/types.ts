declare namespace IUseToggleTree {
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

export { IUseToggleTree }
