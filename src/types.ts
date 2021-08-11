/**
 * Global Types
 */
interface IGenericObject {
  [key: string]: any
}
interface IAction<T> {
  type: T
  payload?: any
}

type Alignment = 'Start' | 'Center' | 'End'
type AlignmentBox = 'Left' | 'Right' | 'Top' | 'Bottom' | 'Center'
interface AlignmentXY {
  x?: Alignment
  y?: Alignment
}
type Size = 'Small' | 'Medium' | 'Large'
type UIState = 'Success' | 'Warning' | 'Error' | 'Info'
type OpenState = 'Closed' | 'Opening' | 'Open' | 'Closing'
type LoadingState = 'Idle' | 'Loading' | 'Done' | 'Retry'

export { IGenericObject, IAction, Alignment, AlignmentXY, AlignmentBox, Size, UIState, OpenState, LoadingState }
