declare namespace IUseImageColour {
  interface IProps {
    sample?: number
  }

  interface IState {
    dominant: number[]
    palette: number[][]
  }
}

export { IUseImageColour }
