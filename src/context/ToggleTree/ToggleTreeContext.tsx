import { createContext } from 'react'
import { IToggleTree } from './types'

/**
 * Context for displaying something that opens
 */
const ToggleTreeContext = createContext<IToggleTree.IValue>({
  toggles: {},
  setToggled: () => {}
})

export default ToggleTreeContext
