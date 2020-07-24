/**
 * Global Types
 */
type Alignment = 'Start' | 'Center' | 'End'
type AlignmentBox = 'Left' | 'Right' | 'Top' | 'Bottom' | 'Center'
interface AlignmentXY {
  x?: Alignment
  y?: Alignment
}
type Size = 'Small' | 'Medium' | 'Large'
type UIState = 'Success' | 'Warning' | 'Error' | 'Info'
type OpenState = 'Closed' | 'Opening' | 'Open' | 'Closing'

export { Alignment, AlignmentXY, AlignmentBox, Size, UIState, OpenState }
